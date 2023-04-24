import { Request, Response, NextFunction } from 'express';
import loginSchema from '../joi/loginSchema';

const loginValidator = async (
  req: Request, 
  res: Response, 
  next: NextFunction,
) => {
  const { error } = loginSchema.validate(req.body);

  console.log(error);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

export default loginValidator;