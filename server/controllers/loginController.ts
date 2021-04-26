import { SECRET } from '@common/config';
import { Request, Response } from 'express';
import User from '../models/user';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

const login = async (req: Request, res: Response) => {
  const { body } = req;

  const user = await User.findOne({ username: body.username });
  const passwordCorrect = user === null
    ? false
    : await compare(body.password, user.passwordHash);
  if (!(user && passwordCorrect)) {
    res.status(401).send('Invalid username or password');
  } else {
    const userToken = {
      username: user.username,
      id: user._id,
    };

    const token = sign(userToken, SECRET);
    res
      .status(200)
      .send({
        token,
        username: user.username,
        name: user.name,
      });
  }
};

export {
  login,
};
