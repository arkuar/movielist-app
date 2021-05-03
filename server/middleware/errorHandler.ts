import { NextFunction, Request, Response } from 'express';
import { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';
import { Error } from 'mongoose';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const errorHandler = (err: any, _req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error.ValidationError) {
    if (err.errors.username) {
      const { message, path } = err.errors.username;
      return res.status(400).json({ error: message, field: path });
    }
    return res.status(400).json({ error: err.message });
  }

  if (err instanceof Error.CastError) {
    return res.status(400).send({ error: `Not a valid ID: ${err.stringValue}` });
  }

  if (err instanceof JsonWebTokenError) {
    return res.status(401).send({ error: 'Invalid token' });
  }

  if (err instanceof TokenExpiredError) {
    return res.status(401).send({ error: 'Token expired' });
  }

  return next(err);
};
