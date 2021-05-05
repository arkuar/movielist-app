import { PostReview } from '@common/types';
import Movie from '../server/models/movie';
import User from '../server/models/user';
import { connection } from 'mongoose';
import { initialMovies, initialUser } from './helper';
import { agent as supertest } from 'supertest';
import app = require('../app');

const api = supertest(app);

const baseUrl = '/api/reviews';

describe('POST /api/reviews', () => {
  let existingMovieId: string;
  beforeEach(async () => {
    await Movie.deleteMany();
    const movies = await Movie.create(initialMovies);
    existingMovieId = movies[0].id;
  });

  describe('with existing user', () => {
    beforeEach(async () => {
      await User.deleteMany();
      const user = new User(await initialUser());
      await user.save();
      const { body } = await api.post('/api/login').send({ username: user.username, password: 'Password' });
      api.auth(body.token, { type: 'bearer' });
    });
    test('should succesfully add review to existing movie', async () => {
      const validReview: PostReview = {
        movieId: existingMovieId,
        rating: 5,
        text: 'Review text',
      };

      await api.post(baseUrl)
        .send(validReview)
        .expect(201)
        .expect('Content-Type', /json/);
    });

    test('should return error if rating is too low', async () => {
      const invalidReview: PostReview = {
        movieId: existingMovieId,
        rating: -1,
        text: 'Review text',
      };
      const { body: { error } } = await api.post(baseUrl)
        .send(invalidReview)
        .expect(400);
      expect(error).toContain('`rating` (-1) is less than minimum allowed value');
    });

    test('should return error if rating is too high', async () => {
      const invalidReview: PostReview = {
        movieId: existingMovieId,
        rating: 11,
        text: 'Review text',
      };
      const { body: { error } } = await api.post(baseUrl)
        .send(invalidReview)
        .expect(400);
      expect(error).toContain('`rating` (11) is more than maximum allowed value ');
    });

    test('should return error if review text is too short', async () => {
      const invalidReview: PostReview = {
        movieId: existingMovieId,
        rating: 7,
        text: 'text',
      };
      const { body: { error } } = await api.post(baseUrl)
        .send(invalidReview)
        .expect(400);
      expect(error).toContain('Path `text` (`text`) is shorter than the minimum allowed length');
    });
  });

  test('should return error if token is invalid', async () => {
    api.auth('invalidtoken', { type: 'bearer' });
    const review: PostReview = {
      movieId: existingMovieId,
      rating: 5,
      text: 'Review text',
    };
    const { body: { error } } = await api.post(baseUrl)
      .send(review)
      .expect(401);
    expect(error).toContain('Invalid token');
  });

  test('should return error if token is missing', async () => {
    api.auth('', '');
    const { body: { error } } = await api.post(baseUrl)
      .send({})
      .expect(401);
    expect(error).toContain('Missing token');
  });

  afterAll(async () => {
    connection.close();
  });
});
