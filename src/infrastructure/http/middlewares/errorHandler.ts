import { Request, Response, NextFunction } from 'express';
import { BadRequestException, ForbiddenException, NotFoundException, UnauthorizedException } from '../../../domain/HttpException';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err);

  if (err instanceof NotFoundException) {
    return res.status(404).json({ success: false, message: err.message });
  }

  if (err instanceof ForbiddenException) {
    return res.status(403).json({ success: false, message: err.message });
  }

  if (err instanceof BadRequestException) {
    return res.status(400).json({ success: false, message: err.message });
  }

  if (err instanceof UnauthorizedException) {
    return res.status(401).json({ success: false, message: err.message });
  }

  return res.status(500).json({
    success: false,
    message: 'Internal server error',
    detail: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
}
