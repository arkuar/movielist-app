import { SECRET } from '@common/config';
import { Token, NewReview } from '@common/types';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import Movie from '../models/movie';
import User from '../models/user';
import Review from '../models/review';

const createReview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body: { text, rating, movieId }, token } = req;
    if (!token) {
      return res.status(401).send({ error: 'Missing token' });
    }
    const decodedToken = verify(token, SECRET) as Token;

    const user = await User.findById(decodedToken.id);

    if (!user) {
      return res.status(400).send({ error: 'Invalid user' });
    }

    const movie = await Movie.findById(movieId);

    if (!movie) {
      return res.status(400).send({ error: 'Invalid movie ID' });
    }

    const review: NewReview = {
      text,
      rating,
      user: user._id,
      movie: movie._id,
    };

    const savedReview = await Review.create(review);

    movie.reviews.push(savedReview._id);
    await movie.save();

    return res.send(savedReview);
  } catch (error) {
    return next(error);
  }
};

export {
  createReview,
};
