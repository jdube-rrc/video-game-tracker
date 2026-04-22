import { getAuth } from '@clerk/express';
import type { NextFunction, Request, Response } from 'express';

export const requireClerkAuth = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const { userId } = getAuth(req);

  if (!userId) {
    res.status(401).json({
      status: 'error',
      message: 'Authentication is required for this operation.',
    });
    return;
  }

  next();
};