import { Movie as IMovie } from '@common/types';
import Movie from '../server/models/movie';

const initialMovies: IMovie[] = [
  {
    id: '0',
    title: 'Godfather',
    year: 1972,
  },
  {
    id: '1',
    title: 'Dark Knight',
    year: 2008,
  },
  {
    id: '2',
    title: 'Pulp Fiction',
    year: 1994,
  },
];

const moviesInDb = async () => {
  const movies = await Movie.find({});
  return movies.map((m) => m.toJSON());
};

export {
  initialMovies,
  moviesInDb,
};
