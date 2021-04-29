import { NewMovie } from '@common/types';
import Movie from '../server/models/movie';

const movies: NewMovie[] = [
  {
    title: 'The Godfather',
    year: 1972,
    starring: [
      'Marlon Brando',
      'Al Pacino',
    ],
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    starring: [
      'Christian Bale',
      'Heath Ledger',
    ],
  },
  {
    title: 'Pulp Fiction',
    year: 1994,
    starring: [
      'John Travolta',
      'Uma Thurman',
    ],
  },
];

const createMovies = async (): Promise<void> => {
  await Movie.deleteMany();
  await Movie.create(movies);
};

export default createMovies;
