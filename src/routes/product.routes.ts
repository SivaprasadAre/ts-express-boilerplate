import { Router, Request, Response } from 'express';
import { ProductController } from '../controllers/product.controller';

const router = Router();
const productController = new ProductController();

// Routes for product operations
// Wrap the method in an anonymous function
router.post('/', (req: Request, res: Response) => { productController.createProduct(req, res) });
router.get('/', (req: Request, res: Response) => { productController.getAllProducts(req, res) });
router.get('/:id', (req: Request, res: Response) => { productController.getProductById(req, res) });
router.put('/:id', (req: Request, res: Response) => { productController.updateProduct(req, res) });
router.delete('/:id', (req: Request, res: Response) => { productController.deleteProduct(req, res) });

export default router;