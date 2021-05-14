import { Review, ReviewValues } from '@common/types';
import axios from './api';

const baseUrl = '/api/reviews';

const createReview = async ({ text, rating, movie }: ReviewValues): Promise<Review> => {
  const response = await axios.post<Review>(baseUrl, { text, rating, movieId: movie });
  return response.data;
};

const deleteReview = async (id: string): Promise<void> => {
  await axios.delete(`${baseUrl}/${id}`);
};

export default {
  createReview,
  deleteReview,
};
