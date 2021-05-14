import { Router } from 'express';
import { createReview, deleteReview } from '../controllers/reviewController';

const reviewRouter = Router();

reviewRouter.post('/', createReview);

reviewRouter.delete('/:id', deleteReview);

export default reviewRouter;
