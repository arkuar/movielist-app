import { NewMovie, NewReview } from '@common/types';
import { NextFunction, Request, Response } from 'express';
import AuthService from '../util/AuthService';
import Movie from '../models/movie';
import User from '../models/user';
import Review from '../models/review';
import OMDBApi from '../util/OMDBApi';
import { isObjectId } from '../util/typeguards';

const createReview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body: { text, rating, movieId }, token } = req;

    const decodedToken = AuthService.verifyToken(token);

    const user = await User.findById(decodedToken.id);

    if (!user) {
      return res.status(400).send({ error: 'Invalid user' });
    }

    if (!movieId) {
      return res.status(400).send({ error: 'Invalid movie ID' });
    }

    // Check if there are existing reviews for the movie already
    let storedMovie = await Movie.findOne({ imdbId: movieId });

    if (!storedMovie) {
      const movieDetails = await OMDBApi.fetchMovie(movieId);

      const movie: NewMovie = {
        title: movieDetails.Title,
        year: +movieDetails.Year,
        starring: movieDetails.Actors.split(','),
        imdbId: movieDetails.imdbID,
        poster: movieDetails.Poster,
        director: movieDetails.Director,
        genres: movieDetails.Genre.split(','),
        plot: movieDetails.Plot,
      };
      storedMovie = await Movie.create(movie);
    }

    const review: NewReview = {
      text,
      rating,
      user: user._id,
      movie: storedMovie._id,
    };

    const savedReview = await Review.create(review);

    storedMovie.reviews.push(savedReview._id);
    await storedMovie.save();

    return res.status(201).send(savedReview);
  } catch (error) {
    return next(error);
  }
};

const deleteReview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const decodedToken = AuthService.verifyToken(req.token);

    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ error: 'Missing review ID' });
    }
    const review = await Review.findById(id);
    if (!review) {
      return res.status(404).send({ error: 'Review not found' });
    }

    if (!(isObjectId(review.user) && review.user.toHexString() === decodedToken.id)) {
      return res.status(401).send({ error: 'Not allowed' });
    }
    await review.remove();
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

const getUserReviews = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = AuthService.verifyToken(req.token);

    const reviews = await Review.find({ user: id }).populate('movie').populate('user');
    return res.json(reviews);
  } catch (error) {
    return next(error);
  }
};

export {
  createReview,
  deleteReview,
  getUserReviews,
};
