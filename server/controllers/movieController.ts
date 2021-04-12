import { Request, Response } from 'express';
import Movie from '../models/movie';

const getMovies = async (_req: Request, res: Response): Promise<void> => {
  const movies = await Movie.find({});
  res.json(movies);
};

const getMovie = async (req: Request, res: Response): Promise<void> => {
  const movie = await Movie.findById(req.params.id);
  if (movie) {
    res.json(movie);
  } else {
    res.sendStatus(404);
  }
};

export {
  getMovies,
  getMovie,
};
