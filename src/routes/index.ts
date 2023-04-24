import { Router } from 'express';

import productsRouter from './products';
import usersRouter from './users';
import ordersRouter from './orders';
import loginRouter from './login';

const router = Router();

router.use(productsRouter);
router.use(usersRouter);
router.use(ordersRouter);
router.use(loginRouter);

export default router;