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
  });

  afterAll(async () => {
    connection.close();
  });
});
