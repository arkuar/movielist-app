import { NextFunction, Request, Response } from 'express';
import User from '../models/user';
import { compare } from 'bcrypt';
import { InputError } from '../util/InputError';
import AuthService from '../util/AuthService';

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body: { username, password } } = req;

    const user = await User.findOne({ username });

    const passwordCorrect = !user
      ? false
      : await compare(password, user.passwordHash);

    if (!(user && passwordCorrect)) {
      throw new InputError('Invalid username or password');
    }
    const token = AuthService.createToken(user);
    return res
      .status(200)
      .send(token);
  } catch (error) {
    return next(error);
  }
};

export {
  login,
};
