import { Review } from '@common/types';
import { StarIcon } from '@heroicons/react/solid';
import React, { createRef, useLayoutEffect, useState } from 'react';

interface ReviewItemProps {
  review: Review;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ review }) => {
  const ref = createRef<HTMLParagraphElement>();
  const [showMore, setShowMore] = useState(false);
  const [showButton, setShowButton] = useState(false);

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
  );
};

export default ReviewItem;
