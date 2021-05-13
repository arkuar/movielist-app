import { Review } from '@common/types';
import { TrashIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import React, { createRef, useLayoutEffect, useState } from 'react';
import useAuth from '../util/hooks/useAuth';

interface ReviewItemProps {
  review: Review;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ review }) => {
  const ref = createRef<HTMLParagraphElement>();
  const [showMore, setShowMore] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [{ username }] = useAuth();

  useLayoutEffect(() => {
    if (ref.current && (ref.current.clientWidth < ref.current.scrollWidth
      || ref.current.clientHeight < ref.current.scrollHeight)) {
      setShowButton(true);
    }
  }, [ref]);

  const onClickMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex flex-col md:flex-row border-b-2 border-t-2 md:border-2 border-gray-300 md:items-center md:rounded-md p-5 my-5 bg-gray-100">
      <div className="flex flex-col">
        <div className="flex flex-row self-center md:self-stretch md:pl-5">
          <p className="font-semibold mr-6">{review.user.name || review.user.username}</p>
          <div className="inline-flex">
            <p className="font-semibold text-gray-800 z-10 top-3.5">{review.rating}</p>
            <StarIcon className="w-6 h-6 text-yellow-400" />
          </div>
        </div>
        <div>
          <p ref={ref} className={`md:mr-6 max-h-32 ${showMore ? 'max-h-full' : 'overflow-hidden'}`}>
            {review.text}
          </p>
        </div>
        {showButton
          && (
            <button onClick={onClickMore} className="border-2 mt-2 uppercase m-auto px-5 border-blue-400 rounded-lg hover:bg-blue-600 hover:text-white font-semibold text-gray-800 transition-colors shadow-md" type="button">
              {showMore ? 'Show less' : 'Show more'}
            </button>
          )}
      </div>
      {username === review.user.username
        && (
        <button className="items-center border-2 mt-5 md:mt-0 md:ml-auto flex justify-center bg-red-500 hover:bg-red-700 p-2 rounded-xl text-white font-medium uppercase transition-colors" type="button">
          <TrashIcon className="w-5 h-5 left" />
          <p>Delete</p>
        </button>
        )}
    </div>
  );
};

export default ReviewItem;
