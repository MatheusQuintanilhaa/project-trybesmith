import { Router } from 'express';
import productController from '../controllers/product.controller';

const router = Router();

router.post('/products', productController.create);

export default router;