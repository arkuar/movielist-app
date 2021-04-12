import { Movie as IMovie } from '@common/types';
import Movie from '../server/models/movie';

const initialMovies: IMovie[] = [
  {
    id: '0',
    title: 'The Godfather',
    year: 1972,
    starring: [
      "Marlon Brando",
      "Al Pacino"
    ]
  },
  {
    id: '1',
    title: 'The Dark Knight',
    year: 2008,
    starring: [
      "Christian Bale",
      "Heath Ledger"
    ]
  },
  {
    id: '2',
    title: 'Pulp Fiction',
    year: 1994,
    starring: [
      "John Travolta",
      "Uma Thurman"
    ]
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
