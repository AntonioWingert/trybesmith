import { Router } from 'express';
import OrdersController from '../controllers/ordersController';
import orderValidator from '../middlewares/orderValidator';
import auth from '../middlewares/auth';

const router = Router();

const ordersController = new OrdersController();

router.get('/orders', ordersController.getAll);
router.post(
  '/orders', 
  auth,
  orderValidator.orderValidator,
  orderValidator.validProduct,
  ordersController.create,
);

export default router;