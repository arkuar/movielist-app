import { Review } from '@common/types';
import { StarIcon } from '@heroicons/react/solid';
import React from 'react';

interface ReviewItemProps {
  review: Review;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ review }) => (
  <div className="flex flex-row border-2 border-gray-400 rounded-md p-5 my-5 bg-gray-100">
    <div className="relative inline-flex items-center justify-center mr-9 w-10">
      <StarIcon className="w-14 h-14 absolute text-yellow-400" />
      <p className="font-bold text-gray-800 z-10">{review.rating}</p>
    </div>
    <div>
      <p className="font-semibold">{review.user.name || review.user.username}</p>
      <p>{review.text}</p>
    </div>
  </div>
);

export default ReviewItem;
