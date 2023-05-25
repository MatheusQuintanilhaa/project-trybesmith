import { Router } from 'express';
import productController from '../controllers/product.controller';

const router = Router();

router.post('/products', productController.create);
router.get('/products', productController.myList);

export default router;