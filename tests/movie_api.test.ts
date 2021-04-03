import supertest = require('supertest');
import app = require('../app');

const api = supertest(app);

describe('GET /api/movies', () => {
  test('should respond with json', async () => {
    await api.get('/api/movies')
      .expect('content-type', /json/)
      .expect(200);
  });

  test('should return all movies', async () => {
    const res = await api.get('/api/movies');
    expect(res.body).toHaveLength(3);
  });

  test('should return movies with correct properties', async () => {
    const res = await api.get('/api/movies');
    res.body.forEach((movie) => {
      expect(movie).toHaveProperty('id');
      expect(movie).toHaveProperty('title');
      expect(movie).toHaveProperty('year');
    });
  });
});

// To fix problems with open handles https://github.com/visionmedia/supertest/issues/520#issuecomment-469044925
afterAll(async () => {
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 500));
});
