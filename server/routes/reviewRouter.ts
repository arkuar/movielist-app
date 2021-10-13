import { Router } from 'express';
import { createReview, deleteReview, getUserReviews } from '../controllers/reviewController';

const reviewRouter = Router();

reviewRouter.get('/', getUserReviews);

reviewRouter.post('/', createReview);

reviewRouter.delete('/:id', deleteReview);

export default reviewRouter;
