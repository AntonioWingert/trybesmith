import { Router } from 'express';
import ProductsController from '../controllers/productsController';
import productsValidator from '../middlewares/productsValidator';

const router = Router();

const productsController = new ProductsController();

router.post('/products', productsValidator, productsController.create);
router.get('/products', productsController.getAll);

export default router;