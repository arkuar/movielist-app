import { PostReview } from '@common/types';
import Movie from '../server/models/movie';
import User from '../server/models/user';
import { connection } from 'mongoose';
import axios from 'axios';
import {
  initialMovies, initialUser, movieFromOMDB, moviesInDb,
} from './helper';
import { agent as supertest } from 'supertest';
import app = require('../app');

const api = supertest(app);

const baseUrl = '/api/reviews';

jest.mock('axios');

describe('POST /api/reviews', () => {
  let existingMovieId: string;
  beforeEach(async () => {
    await Movie.deleteMany();
    const movies = await Movie.create(initialMovies);
    existingMovieId = movies[0].imdbId;
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

    test('should succesfully add review to a new movie', async () => {
      const validReview: PostReview = {
        movieId: 'validId',
        rating: 9,
        text: 'A true masterpiece!',
      };

      const mockedAxios = axios as jest.Mocked<typeof axios>;
      mockedAxios.get.mockResolvedValue({ data: movieFromOMDB });

      await api.post(baseUrl)
        .send(validReview)
        .expect(201)
        .expect('Content-Type', /json/);

      const updatedMovies = await moviesInDb();
      expect(updatedMovies.length).toEqual(initialMovies.length + 1);

      expect(mockedAxios.get).toHaveBeenCalled();
      const latestMovie = updatedMovies.pop();
      expect(latestMovie?.imdbId).toEqual(movieFromOMDB.imdbID);
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
      expect(error).toContain('Must be a value between 1 and 10, got -1');
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
      expect(error).toContain('Must be a value between 1 and 10, got 11');
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
      expect(error).toContain('Must be at least 5 characters long');
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
    expect(error).toContain('jwt malformed');
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
