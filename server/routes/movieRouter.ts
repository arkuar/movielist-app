import { Router } from 'express';
import { findMovies, getMovie, getMovies } from '../controllers/movieController';

const movieRouter = Router();

movieRouter.get('/', getMovies);

movieRouter.get('/search', findMovies);

movieRouter.get('/:id', getMovie);

export default movieRouter;
