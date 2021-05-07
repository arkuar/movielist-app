// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const inDevelopment = process.env.NODE_ENV === 'development';

const MONGODB_URI = (process.env.NODE_ENV === 'test'
  ? process.env.MONGODB_TEST
  : process.env.MONGODB_URI)
  || '';

const PORT = process.env.PORT || 8000;

const SECRET = process.env.SECRET || '';

const OMDB_API_KEY = process.env.OMDB_API_KEY || '';

export {
  inDevelopment,
  MONGODB_URI,
  PORT,
  SECRET,
  OMDB_API_KEY,
};
