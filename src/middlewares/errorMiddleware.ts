import { NextFunction, Request, Response } from 'express';
import joiMapStatusHTTP from '../utils/joiMapStatusHTTP';
import mapStatusHTTP from '../utils/mapStatusHTTP';

type JoiError = {
  details: { type: string; message: string; }[];
};

type ErrorMiddlewareFunc = 
  (error: JoiError, req: Request, res: Response, next: NextFunction) => Response | void;

const errorMiddleware: ErrorMiddlewareFunc = (error, _req, res, _next) => {
  const { type, message } = error.details[0];

  const statusCode: number = mapStatusHTTP(joiMapStatusHTTP[type]);

  return res.status(statusCode).json({ message });
};

export = errorMiddleware;