import Review from '../server/models/review';
import User from '../server/models/user';
import users from './users.json';

const createUsers = async (): Promise<void> => {
  await User.deleteMany();
  await Review.deleteMany();
  const insertManyResult = await User.collection.insertMany(users);
  console.log(`${insertManyResult.insertedCount} user documents inserted`);
};

export default createUsers;
