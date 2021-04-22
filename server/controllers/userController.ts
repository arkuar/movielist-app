import { NewUser } from '@common/types';
import { hash } from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import User from '../models/user';

const SALT_ROUNDS = 10;

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body: { username, password, name } } = req;

    if (!password) {
      return res.status(400).send({ error: 'Password required' });
    }

    if (password.length < 5) {
      return res.status(400).send({ error: 'Password has to be atleast 5 characters long' });
    }

    const passwordHash = await hash(password, SALT_ROUNDS);

    const user: NewUser = {
      username,
      passwordHash,
      name,
    };

    const savedUser = await User.create(user);
    return res.json(savedUser.toJSON());
  } catch (error) {
    return next(error);
  }
};

export {
  signup,
};
