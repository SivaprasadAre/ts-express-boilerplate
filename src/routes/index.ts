import { Router } from 'express';
import productRoutes from './product.routes';

const router = Router();

router.use('/products', productRoutes);

export { router };