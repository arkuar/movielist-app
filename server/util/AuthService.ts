import { SECRET } from '@common/config';
import { Token } from '@common/types';
import { JsonWebTokenError, verify } from 'jsonwebtoken';

const verifyToken = (token: string | null): Token => {
  if (!token) {
    throw new JsonWebTokenError('Missing token');
  }
  return verify(token, SECRET) as Token;
};

export default {
  verifyToken,
};
