// import { NewReview } from '@common/types';
import { NextFunction, Request, Response } from 'express';
// import Review from '../models/review';

const createReview = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
  // try {
  //   const { body: { text, rating, movie } } = req;

  //   const review: NewReview = {
  //     text,
  //     rating,

  //   };
  // } catch (error) {
  //   next(error);
  // }
  res.send('Not yet implemented');
};

export {
  createReview,
};
