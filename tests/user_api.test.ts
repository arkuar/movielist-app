import User from '../server/models/user';
import { initialUser } from './helper';
import { connection } from 'mongoose';
import supertest = require('supertest');
import app = require('../app');

const api = supertest(app);

describe('POST /api/users', () => {
  beforeEach(async () => {
    await User.deleteMany();
    await User.create(await initialUser());
  });

  test('should return username if singup succeeds', async () => {
    const { body: { username } } = await api.post('/api/users')
      .send({ username: 'Tester', password: 'Password123' })
      .expect(200)
      .expect('Content-Type', /json/);
    expect(username).toEqual('Tester');
  });

  test('should fail if username is taken', async () => {
    const { body: { error } } = await api.post('/api/users')
      .send({ username: 'TestUser', password: 'Password' })
      .expect(400)
      .expect('Content-Type', /json/);
    expect(error).toContain('expected `username` to be unique');
  });

  test('should return proper error message if password is missing', async () => {
    const { body: { error } } = await api.post('/api/users')
      .send({ username: 'Tester' })
      .expect(400)
      .expect('Content-Type', /json/);
    expect(error).toEqual('Password required');
  });

  test('should return proper error message if password is too short', async () => {
    const { body: { error } } = await api.post('/api/users')
      .send({ username: 'Tester', password: 'abc' })
      .expect(400)
      .expect('Content-Type', /json/);
    expect(error).toEqual('Password has to be atleast 5 characters long');
  });
});

afterAll(async () => {
  connection.close();
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 500));
});
