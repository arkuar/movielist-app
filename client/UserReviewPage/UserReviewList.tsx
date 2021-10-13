import { Review } from '@common/types';
import React, { useEffect, useState } from 'react';
import ReviewList from '../ReviewList/ReviewList';
import reviewService from '../util/services/reviews';

const UserReviewList: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    async function fetchReviews() {
      const userReviews = await reviewService.getUserReviews();
      setReviews(userReviews);
    }
    fetchReviews();
  }, []);

  return <ReviewList reviews={reviews} onDeleteClick={() => { }} />;
};

export default UserReviewList;
