import { NewMovie } from '@common/types';
import Movie from '../server/models/movie';

const movies: NewMovie[] = [
  {
    title: 'The Godfather',
    year: 1972,
    starring: [
      'Marlon Brando',
      'Al Pacino',
      'James Caan',
      'Richard S. Castellano',
    ],
    director: 'Francis Ford Coppola',
    imdbId: 'tt0068646',
    genres: [
      'Crime', 'Drama',
    ],
    plot: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
    poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    starring: [
      'Christian Bale',
      'Heath Ledger',
      'Aaron Eckhart',
      'Michael Caine',
    ],
    director: 'Christopher Nolan',
    imdbId: 'tt0468569',
    plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    genres: [
      'Action',
      'Crime',
      'Drama',
      'Thriller',
    ],
    poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
  },
  {
    title: 'Pulp Fiction',
    year: 1994,
    starring: [
      'Tim Roth', 'Amanda Plummer', 'Laura Lovelace', 'John Travolta',
    ],
    director: 'Quentin Tarantino',
    imdbId: 'tt0110912',
    plot: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    genres: ['Crime', 'Drama'],
    poster: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
];

const createMovies = async (): Promise<void> => {
  await Movie.deleteMany();
  await Movie.create(movies);
};

export default createMovies;
