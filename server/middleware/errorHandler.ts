import { NextFunction, Request, Response } from 'express';

const errorHandler = (error: Error, _req: Request, res: Response, next: NextFunction) => {
  if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message });
  }

  return next(error);
};

export {
  errorHandler,
};
