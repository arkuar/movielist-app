import { Review } from '@common/types';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewList from '../ReviewList/ReviewList';
import reviewService from '../util/services/reviews';
import useDialog from '../util/hooks/useDialog';
import useToaster from '../util/hooks/useToaster';

const UserReviewList: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const { error, success } = useToaster();
  const confirm = useDialog();

  useEffect(() => {
    async function fetchReviews() {
      const userReviews = await reviewService.getUserReviews();
      setReviews(userReviews);
    }
    fetchReviews();
  }, []);

  const onDeleteClick = async (reviewId: string) => {
    try {
      await confirm({
        title: 'Delete review',
        description: 'Are you sure you want to delete this review?',
      });
      await reviewService.deleteReview(reviewId);
      setReviews(reviews.filter((r) => r.id !== reviewId));
      success('Review deleted succesfully!');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const { error: message } = err.response?.data;
        error(message);
      }
    }
  };

  return <ReviewList reviews={reviews} onDeleteClick={onDeleteClick} showMovieInfo />;
};

export default UserReviewList;
