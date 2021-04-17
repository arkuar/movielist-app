import User from '../server/models/user';
import { initialUser } from './helper';
import { connection } from 'mongoose';
import supertest = require('supertest');
import app = require('../app');

const api = supertest(app);

describe('POST /api/login', () => {
  // Populate database with initial user
  beforeEach(async () => {
    await User.deleteMany();
    const user = new User(await initialUser());
    await user.save();
  });

  test('should return token and username if login succeeds', async () => {
    const { body } = await api.post('/api/login')
      .send({ username: 'TestUser', password: 'Password' })
      .expect(200)
      .expect('Content-Type', /json/);
    expect(body).toHaveProperty('token');
    expect(body).toHaveProperty('username');
    expect(body.username).toEqual('TestUser');
  });

  test('should return 401 if username or password are incorrect', async () => {
    await api.post('/api/login')
      .send({ username: 'invalid', password: 'password' })
      .expect(401);
  });

  afterAll(async () => {
    connection.close();
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 500));
  });
});
