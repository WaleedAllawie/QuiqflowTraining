import { type Request, type Response, type NextFunction } from 'express';

const errorHandler = (
  err: Error & { status?: number },
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err.status) {
    res.status(err.status).json({ msg: err.message });
  } else {
    res.status(500).json({ msg: err.message });
  }
};

export default errorHandler;
