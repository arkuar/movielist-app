import Review from '../server/models/review';
import reviews from './reviews.json';

const createReviews = async (): Promise<void> => {
  await Review.deleteMany();
  const insertManyResult = await Review.create(reviews);
  console.log(`${insertManyResult.length} review documents inserted`);
};

export default createReviews;
