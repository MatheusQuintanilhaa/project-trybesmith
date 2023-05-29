import { Router } from 'express';
import productController from '../controllers/product.controller';

const router = Router();

router.post('/products', productController.build);
router.get('/products', productController.myList);

export default router;