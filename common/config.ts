// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const inDevelopment = process.env.NODE_ENV === 'development';

const MONGODB_URI = (process.env.NODE_ENV === 'test'
  ? process.env.MONGODB_TEST
  : process.env.MONGODB_URI)
  || '';

const PORT = process.env.PORT || 8000;

const SECRET = process.env.SECRET || '';

export {
  inDevelopment,
  MONGODB_URI,
  PORT,
  SECRET,
};
