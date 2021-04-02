import { Movie } from '@common/types';
import { Request, Response } from 'express';

const movies: Movie[] = [
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

const getMovies = (_req: Request, res: Response): Response => res.send(movies);

export {
  getMovies,
};
