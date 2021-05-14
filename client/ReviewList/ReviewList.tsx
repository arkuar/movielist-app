import { Review } from '@common/types';
import { TrashIcon } from '@heroicons/react/outline';
import React from 'react';
import ReviewItem from './ReviewItem';
import useAuth from '../util/hooks/useAuth';
import ReviewItemContainer from './ReviewItemContainer';

interface ReviewListProps {
  reviews: Review[];
  onDeleteClick: (id: string) => void;
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews, onDeleteClick }) => {
  const [{ username }] = useAuth();

  if (reviews.length === 0) {
    return null;
  }

  return (
    <div className="my-5 md:m-5">
      <h2 className="font-semibold text-xl ml-5">Reviews</h2>
      {reviews.map((r) => (
        <ReviewItemContainer key={r.id}>
          <ReviewItem review={r} />
          {username === r.user.username
            && (
              <button onClick={() => onDeleteClick(r.id)} className="items-center border-2 mt-5 md:mt-0 md:ml-auto flex justify-center bg-red-500 hover:bg-red-700 p-2 rounded-xl text-white font-medium uppercase transition-colors" type="button">
                <TrashIcon className="w-5 h-5 left" />
                <p>Delete</p>
              </button>
            )}
        </ReviewItemContainer>
      ))}
    </div>
  );
};

export default ReviewList;
