import { Review } from '@common/types';
import { TrashIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import React from 'react';

interface ReviewItemProps {
  review: Review;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ review }) => (
  <div className="flex flex-col md:flex-row border-b-2 border-t-2 md:border-2 border-gray-300 md:items-center md:rounded-md p-5 my-5 bg-gray-100">
    <div className="flex">
      <div className="relative inline-flex items-center justify-center mr-9 w-10">
        <StarIcon className="w-14 h-14 absolute text-yellow-400" />
        <p className="font-bold text-gray-800 z-10">{review.rating}</p>
      </div>
      <div>
        <p className="font-semibold">{review.user.name || review.user.username}</p>
        <p>{review.text}</p>
      </div>
    </div>
    <button className="items-center border-2 mt-5 md:mt-0 md:ml-auto flex justify-center bg-red-500 hover:bg-red-700 p-2 rounded-xl text-white font-medium uppercase" type="button">
      <TrashIcon className="w-5 h-5 left" />
      <p>Delete</p>
    </button>
  </div>
);

export default ReviewItem;
