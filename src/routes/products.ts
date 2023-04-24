import { Router } from 'express';
import ProductsController from '../controllers/productsController';

const router = Router();

const productsController = new ProductsController();

router.post('/products', productsController.create);

export default router;