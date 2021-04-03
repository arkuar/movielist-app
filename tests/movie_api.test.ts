import supertest = require('supertest');
import app = require('../app');

const api = supertest(app);

describe('GET /api/movies', () => {
  jest.setTimeout(30000);
  test('should respond with json', async () => {
    await api.get('/api/movies')
      .expect('content-type', /json/)
      .expect(200);
  });
});

// To fix problems with open handles https://github.com/visionmedia/supertest/issues/520#issuecomment-469044925
afterAll(async () => {
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 500));
});
