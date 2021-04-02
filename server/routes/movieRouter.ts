import { Router } from 'express';
import { getMovie, getMovies } from '../controllers/movieController';

const movieRouter = Router();

movieRouter.get('/', getMovies);

movieRouter.get('/:id', getMovie);

export default movieRouter;
