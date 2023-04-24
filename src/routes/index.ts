import { Router } from 'express';

import productsRouter from './products';
import usersRouter from './users';
import ordersRouter from './orders';

const router = Router();

router.use(productsRouter);
router.use(usersRouter);
router.use(ordersRouter);

export default router;