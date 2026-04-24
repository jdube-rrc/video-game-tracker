import { getAuth } from '@clerk/express';
import type { NextFunction, Request, Response } from 'express';

/**
 * Middleware to restrict access to users with the 'admin' role.
 * Role is expected to be stored in Clerk's publicMetadata.
 */
export const requireAdmin = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const { sessionClaims } = getAuth(req);
  
  const role = (sessionClaims?.metadata as any)?.role;

  if (role !== 'admin') {
    res.status(403).json({
      status: 'error',
      message: 'Forbidden: Administrative privileges required.',
    });
    return;
  }

  next();
};