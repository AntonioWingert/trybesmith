import { Request, Response, NextFunction } from 'express';
import usersSchema from '../joi/usersSchema';

const stringValidator = async (
  req: Request, 
  res: Response, 
  next: NextFunction,
) => {
  const { error } = usersSchema.validate(req.body);

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

const numberValidator = async (
  req: Request, 
  res: Response, 
  next: NextFunction,
) => {
  const { error } = usersSchema.validate(req.body);

  console.log(error);

  if (error?.details[0].type === 'any.required') {
    return res.status(400).json({ message: error.message });
  }

  if (error?.details[0].type === 'number.base') {
    return res.status(422).json({ message: error.message });
  }

  if (error?.details[0].type === 'number.min') {
    return res.status(422).json({ message: error.message });
  }

  next();
};

const userValidator = {
  stringValidator,
  numberValidator,
};

export default userValidator;