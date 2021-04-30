import { Router } from 'express';
import { createReview } from '../controllers/reviewController';

const reviewRouter = Router();

reviewRouter.post('/', createReview);

export default reviewRouter;
