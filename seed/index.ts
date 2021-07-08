import 'module-alias/register';
import { connect, disconnect } from 'mongoose';
import { MONGODB_URI } from '@common/config';
import createUsers from './create_users';
import createMovies from './create_movies';
import createReviews from './create_reviews';

async function seed() {
  await connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Connected to MongoDB');
  await createUsers();
  await createMovies();
  await createReviews();
  await disconnect();
  console.log('Connection closed');
}

seed();
