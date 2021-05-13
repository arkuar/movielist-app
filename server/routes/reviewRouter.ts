import { Router } from 'express';
import { createReview, deleteReview } from '../controllers/reviewController';

const reviewRouter = Router();

reviewRouter.post('/', createReview);
reviewRouter.delete('/', deleteReview);

export default reviewRouter;
