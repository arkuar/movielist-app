import Review from '../server/models/review';
import User from '../server/models/user';
import users from './users.json';

const createUsers = async (): Promise<void> => {
  await User.deleteMany();
  await Review.deleteMany();
  const insertManyResult = await User.create(users);
  console.log(`${insertManyResult.length} user documents inserted`);
};

export default createUsers;
