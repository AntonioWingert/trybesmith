import jwt, { JwtPayload } from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import CustomRequest from '../interfaces/customRequest';

const { JWT_SECRET } = process.env as { JWT_SECRET: string };

interface Decoded extends JwtPayload {
  id: string;
}

const auth = async (
  req: CustomRequest,
  res: Response, 
  next: NextFunction,
): Promise<void | Response> => {
  const token = req.headers.authorization;
  
  if (!token) return res.status(401).json({ message: 'Token not found' });
  
  req.token = token;

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as Decoded;

    req.body.userId = String(decoded.id);

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default auth;