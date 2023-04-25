import { NextFunction, Request, Response } from 'express';
import orderSchema from '../joi/orderSchema';

const orderValidator = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { error } = orderSchema.validate(req.body);

  if (error?.details[0].type === 'any.required') {
    return res.status(400).json({ message: error.message });
  }

  if (error?.details[0].type === 'array.base') {
    return res.status(422).json({ message: error.message });
  }

  if (error?.details[0].type === 'array.empty') {
    return res.status(422).json({ message: error.message });
  }

  if (error?.details[0].type === 'number.base') {
    return res.status(422).json({ message: error.message });
  }

  next();
};

const validProduct = (
  req: Request, 
  res: Response, 
  next: NextFunction,
) => {
  const { productsIds } = req.body;

  if (productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }

  next();
};

export default { orderValidator, validProduct };