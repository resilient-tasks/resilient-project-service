import jwt from 'jsonwebtoken';
import { JWTPayload } from '../middlewares/authenticateJWT';

export class JWTUtils {
  private static readonly jwtSecret = process.env.JWT_SECRET || 'your-secret-key';

  static verifyToken(token: string): JWTPayload | null {
    try {
      return jwt.verify(token, this.jwtSecret) as JWTPayload;
    } catch (error) {
      return null;
    }
  }
} 