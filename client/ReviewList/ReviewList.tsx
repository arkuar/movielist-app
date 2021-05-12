import { Review } from '@common/types';
import React from 'react';

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => (
  <div>
    {reviews.map((r) => (
      <div key={r.id}>
        <p>{r.text}</p>
        <p>{r.rating}</p>
        <p>{r.user.name || r.user.username}</p>
      </div>
    ))}
  </div>
);

export default ReviewList;
