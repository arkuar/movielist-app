import { Review } from '@common/types';
import { FilmIcon, TrashIcon } from '@heroicons/react/outline';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ReviewItem from './ReviewItem';
import useAuth from '../util/hooks/useAuth';
import ReviewItemContainer from './ReviewItemContainer';

interface ReviewListProps {
  reviews: Review[];
  showMovieInfo?: boolean
  onDeleteClick: (id: string) => void;
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews, showMovieInfo, onDeleteClick }) => {
  const history = useHistory();
  const [{ username }] = useAuth();

  if (reviews.length === 0) {
    return null;
  }

  const viewMoviePage = (movieId: string) => history.push(`/movies/${movieId}`);

  return (
    <div className="my-5 md:m-5">
      <h2 className="font-semibold text-xl ml-5">Reviews</h2>
      {reviews.map((r) => (
        <ReviewItemContainer key={r.id}>
          <ReviewItem review={r} />
          <div className="md:ml-auto items-stretch flex flex-col flex-shrink-0">
            {showMovieInfo && (
              <button onClick={() => viewMoviePage(r.movie.id)} className="items-center border-2 mt-5 md:mt-0 md:ml-auto flex justify-center bg-blue-400 hover:bg-blue-500 p-3 rounded-xl text-white font-medium uppercase transition-colors" type="button">
                <FilmIcon className="w-5 h-5 left mr-1" />
                <p>Movie</p>
              </button>
            )}
            {username === r.user.username
              && (
                <button
                  onClick={() => onDeleteClick(r.id)}
                  className="items-center border-2 mt-5 md:mt-0 flex justify-center bg-red-600 hover:bg-red-700 p-2 rounded-xl text-white font-medium uppercase transition-colors"
                  type="button"
                >
                  <TrashIcon className="w-5 h-5 left mr-1" />
                  <p>Delete</p>
                </button>
              )}
          </div>
        </ReviewItemContainer>
      ))}
    </div>
  );
};

export default ReviewList;
