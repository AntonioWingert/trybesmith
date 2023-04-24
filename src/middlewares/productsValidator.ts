import { Request, Response, NextFunction } from 'express';
import productsSchema from '../joi/productsSchema';

const productsValidator = async (
  req: Request, 
  res: Response, 
  next: NextFunction,
) => {
  const { error } = productsSchema.validate(req.body);

  console.log(error);

  if (error?.details[0].type === 'any.required') {
    return res.status(400).json({ message: error.message });
  }

  if (error?.details[0].type === 'string.base') {
    return res.status(422).json({ message: error.message });
  }

  if (error?.details[0].type === 'string.min') {
    return res.status(422).json({ message: error.message });
  }

  next();
};

export default productsValidator;