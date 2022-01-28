import { NextFunction, Request, Response } from 'express';
import OMDBApi from '../util/OMDBApi';
import Movie from '../models/movie';
import AuthService from '../util/AuthService';

const getMovies = async (_req: Request, res: Response): Promise<void> => {
  const movies = await Movie.find({}).populate('reviews', 'rating');
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

const findMovies = async (req: Request, res: Response, next: NextFunction) => {
  try {
    AuthService.verifyToken(req.token);
    const { title } = req.query;
    if (typeof title !== 'string') {
      throw new Error(`Error parsing title ${title}`);
    }

    const searchResult = await OMDBApi.search(title);
    return res.send(searchResult);
  } catch (error) {
    return next(error);
  }
};

export {
  getMovies,
  getMovie,
  findMovies,
};
