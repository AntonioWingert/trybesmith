import { Router } from 'express';

import productsRouter from './products';
import usersRouter from './users';

const router = Router();

router.use(productsRouter);
router.use(usersRouter);

export default router;