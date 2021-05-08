import { SECRET } from '@common/config';
import { Token, UserModel } from '@common/types';
import { JsonWebTokenError, sign, verify } from 'jsonwebtoken';

const verifyToken = (token: string | null): Token => {
  if (!token) {
    throw new JsonWebTokenError('Missing token');
  }
  return verify(token, SECRET) as Token;
};

const createToken = (user: UserModel) => {
  const userToken = {
    username: user.username,
    id: user._id,
  };
  const token = sign(userToken, SECRET);

  return {
    token,
    username: user.username,
    name: user.name,
  };
};

export default {
  verifyToken,
  createToken,
};
