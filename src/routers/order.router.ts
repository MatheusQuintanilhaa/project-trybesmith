import { Router } from 'express';
import anyProducts from '../controllers/order.controller';

const router = Router();

router.get('/orders', anyProducts.anyProductsByOrder);

export default router;