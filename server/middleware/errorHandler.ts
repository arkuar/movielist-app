import { NextFunction, Request, Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const errorHandler = (error: any, _req: Request, res: Response, next: NextFunction) => {
  if (error.name === 'ValidationError') {
    if (error.errors.username) {
      const { message, path } = error.errors.username;
      return res.status(400).json({ error: message, field: path });
    }
    return res.status(400).json({ error: error.message });
  }

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'Not a valid ID' });
  }

  return next(error);
};

export {
  errorHandler,
};
