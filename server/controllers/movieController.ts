import { NextFunction, Request, Response } from 'express';
import OMDBApi from '../util/OMDBApi';
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

const findMovies = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title } = req.query;
    if (typeof title === 'string') {
      const searchResult = await OMDBApi.search(title);
      res.send(searchResult);
    } else {
      throw new Error(`Error parsing title ${title}`);
    }
  } catch (error) {
    next(error);
  }
};

export {
  getMovies,
  getMovie,
  findMovies,
};
