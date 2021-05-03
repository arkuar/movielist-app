import { NewUser } from '@common/types';
import { hashSync } from 'bcrypt';
import User from '../server/models/user';

const passwordHash = hashSync('password', 10);

const users: NewUser[] = [
  {
    username: 'Matt1',
    passwordHash,
  },
  {
    username: 'Pekka',
    passwordHash,
  },
];

const createUsers = async (): Promise<void> => {
  await User.deleteMany();
  const usersToStore = users.map((u) => new User(u));
  const promiseArr = usersToStore.map((u) => u.save());
  await Promise.all(promiseArr);
};

export default createUsers;
