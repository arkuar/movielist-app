import Review from '../server/models/review';
import reviews from './reviews.json';

const createReviews = async (): Promise<void> => {
  await Review.deleteMany();
  const insertManyResult = await Review.collection.insertMany(reviews);
  console.log(`${insertManyResult.insertedCount} review documents inserted`);
};

export default createReviews;
