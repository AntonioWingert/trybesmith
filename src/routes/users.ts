import { Router } from 'express';
import UsersController from '../controllers/usersController';
import userValidator from '../middlewares/userValidator';

const router = Router();

const usersController = new UsersController();

router.post(
  '/users', 
  userValidator.numberValidator,
  userValidator.stringValidator,
  usersController.create,
);

export default router;