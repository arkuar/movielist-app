import { NextFunction, Request, Response } from 'express';

export const tokenExtractor = (req: Request, _res: Response, next: NextFunction) => {
  const auth = req.get('Authorization');
  if (auth && auth.toLocaleLowerCase().startsWith('bearer ')) {
    req.token = auth.substring(7);
  } else {
    req.token = null;
  }
  next();
};
