import Movie from '../server/models/movie';
import movies from './movies.json';

const createMovies = async (): Promise<void> => {
  await Movie.deleteMany();
  const insertManyResult = await Movie.create(movies);
  console.log(`${insertManyResult.length} movie documents inserted`);
};

export default createMovies;
