import { Review } from '@common/types';
import React from 'react';
import ReviewItem from './ReviewItem';

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => (
  <div className="my-5 md:m-5">
    <h2 className="font-semibold text-xl">Reviews</h2>
    {reviews.map((r) => (
      <ReviewItem key={r.id} review={r} />
    ))}
  </div>
);

export default ReviewList;
