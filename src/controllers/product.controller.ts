import { Request, Response } from 'express';
import { ProductService, IProduct } from '../services/product.service';

class ProductController {
    private productService: ProductService;

    constructor() {
        this.productService = new ProductService();
    }

    // Handle creating a new product
    async createProduct(req: Request, res: Response): Promise<Response> {
        const productData: IProduct = req.body;
        try {
            const product = await this.productService.createProduct(productData);
            return res.status(201).json({ status: 'success', product });
        } catch (error) {
            return res.status(500).json({ status: 'error', message: (error as Error).message });
        }
    }

    // Handle getting all products
    async getAllProducts(req: Request, res: Response): Promise<Response> {
        try {
            const products = await this.productService.getAllProducts();
            return res.status(200).json({ status: 'success', products });
        } catch (error) {
            return res.status(500).json({ status: 'error', message: (error as Error).message });
        }
    }

    // Handle getting a product by ID
    async getProductById(req: Request, res: Response): Promise<Response> {
        const productId = req.params.id;
        try {
            const product = await this.productService.getProductById(productId);
            if (!product) {
                return res.status(404).json({ status: 'error', message: 'Product not found' });
            }
            return res.status(200).json({ status: 'success', product });
        } catch (error) {
            return res.status(500).json({ status: 'error', message: (error as Error).message });
        }
    }

    // Handle updating a product
    async updateProduct(req: Request, res: Response): Promise<Response> {
        const productId = req.params.id;
        const productData: IProduct = req.body;
        try {
            const updatedProduct = await this.productService.updateProduct(productId, productData);
            if (!updatedProduct) {
                return res.status(404).json({ status: 'error', message: 'Product not found' });
            }
            return res.status(200).json({ status: 'success', product: updatedProduct });
        } catch (error) {
            return res.status(500).json({ status: 'error', message: (error as Error).message });
        }
    }

    // Handle deleting a product
    async deleteProduct(req: Request, res: Response): Promise<Response> {
        const productId = req.params.id;
        try {
            await this.productService.deleteProduct(productId);
            return res.status(200).json({ status: 'success', message: 'Product deleted' });
        } catch (error) {
            return res.status(500).json({ status: 'error', message: (error as Error).message });
        }
    }
}

export { ProductController };