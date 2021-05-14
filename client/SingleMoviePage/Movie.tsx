import React, { useEffect, useReducer } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { getMovie } from '../util/services/movies';
import ReviewList from '../ReviewList/ReviewList';
import MovieInfo from './MovieInfo';
import MovieStats from './MovieStats';
import {
  movieReducer, MovieState, removeReview, setMovie,
} from '../util/reducers';
import reviewsService from '../util/services/reviews';
import useToaster from '../util/hooks/useToaster';

const initialState: MovieState = {
  movie: undefined,
  reviews: [],
};

const Movie: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [{ movie, reviews }, dispatch] = useReducer(movieReducer, initialState);
  const { error, success } = useToaster();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const result = await getMovie(id);
        dispatch(setMovie(result));
      } catch (err) {
        history.push('/');
      }
    };
    fetchMovie();
  }, [id, history]);

  const onDeleteClick = async (reviewId: string) => {
    try {
      await reviewsService.deleteReview(reviewId);
      dispatch(removeReview(reviewId));
      success('Review deleted succesfully!');
    } catch (err) {
      const { error: message } = err.response.data;
      error(message);
    }
  };

  if (!movie) {
    return <Loading />;
  }

  return (
    <>
      <div className="border-b-2 md:border-2 md:m-5 flex flex-col items-center md:rounded flex-wrap bg-gray-100 border-gray-400">
        <div className="flex flex-col md:flex-row w-full items-center md:items-stretch">
          {movie.poster && <img src={movie.poster} alt="Movie poster" className="rounded md:rounded-r-md" width="200" height="300" />}
          <div className="flex flex-col md:flex-row pt-0 md:pt-6 p-6 mt-2 md:mt-0 w-full">
            <MovieStats reviews={reviews} />
            <MovieInfo movie={movie} />
          </div>
        </div>
      </div>
      <ReviewList reviews={reviews} onDeleteClick={onDeleteClick} />
    </>
  );
};

export default Movie;
