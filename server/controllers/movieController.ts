import { NextFunction, Request, Response } from 'express';
import Movie from '../models/movie';

const getMovies = async (_req: Request, res: Response): Promise<void> => {
  const movies = await Movie.find({});
  res.json(movies);
};

const getMovie = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const movie = await Movie.findById(req.params.id).populate({
      path: 'reviews',
      populate: { path: 'user' },
    });

    if (movie) {
      res.json(movie);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
};

export {
  getMovies,
  getMovie,
};
