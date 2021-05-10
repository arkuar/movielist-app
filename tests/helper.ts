import { NewMovie, NewUser } from '@common/types';
import { hash } from 'bcrypt';
import User from '../server/models/user';
import Movie from '../server/models/movie';

const initialMovies: NewMovie[] = [
  {
    title: 'The Godfather',
    year: 1972,
    starring: [
      'Marlon Brando',
      'Al Pacino',
    ],
    imdbId: 'tt0068646',
    director: 'Francis Ford Coppola',
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    starring: [
      'Christian Bale',
      'Heath Ledger',
    ],
    imdbId: 'tt0468569',
    director: 'Christopher Nolan',
  },
  {
    title: 'Pulp Fiction',
    year: 1994,
    starring: [
      'John Travolta',
      'Uma Thurman',
    ],
    imdbId: 'tt0110912',
    director: 'Quentin Tarantino',
  },
];

const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await hash(password, 10);
  return hashedPassword;
};

const initialUser = async (): Promise<NewUser> => ({
  username: 'TestUser',
  passwordHash: await hashPassword('Password'),
});

const usersInDb = async () => {
  const users = await User.find({});
  return users.map((u) => u.toJSON());
};

const moviesInDb = async () => {
  const movies = await Movie.find({});
  return movies.map((m) => m.toJSON());
};

export {
  initialMovies,
  moviesInDb,
  initialUser,
  usersInDb,
};
