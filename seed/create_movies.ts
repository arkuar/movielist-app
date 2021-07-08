import Movie from '../server/models/movie';
import movies from './movies.json';

const createMovies = async (): Promise<void> => {
  await Movie.deleteMany();
  const insertManyResult = await Movie.collection.insertMany(movies);
  console.log(`${insertManyResult.insertedCount} movie documents inserted`);
};

export default createMovies;
