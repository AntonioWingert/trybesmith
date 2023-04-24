import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const { JWT_SECRET } = process.env as { JWT_SECRET: Secret };

export interface CustomRequest extends Request {
  token: JwtPayload | string;
}

export const auth = async (
  req: Request,
  res: Response, 
  next: NextFunction,
): Promise<void | Response> => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

    (req as CustomRequest).token = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};