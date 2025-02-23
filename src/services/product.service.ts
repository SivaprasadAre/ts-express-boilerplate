import { Product, IProduct } from '../models/Product';
import { logger } from '../utils/logger';

class ProductService {
    // Create a new product
    async createProduct(productData: IProduct): Promise<IProduct> {
        try {
            logger.info('Creating a new product');

            const newProduct = await Product.create(productData);

            logger.info('Product created successfully', { productId: newProduct._id });
            return newProduct;
        } catch (err: unknown) {
            logger.error('Error occurred while creating product', { error: err, productData });
            throw new Error('Product creation failed');
        }

    }

    // Get all products
    async getAllProducts(): Promise<IProduct[]> {
        logger.info('Fetching All product by ID');
        return await Product.find();
    }

    // Get a product by ID
    async getProductById(productId: string): Promise<IProduct | null> {
        logger.info('Fetching product by ID', productId);
        return await Product.findById(productId);
    }

    // Update a product
    async updateProduct(productId: string, productData: IProduct): Promise<IProduct | null> {
        logger.info('Updating product', { productId, productData });
        return await Product.findByIdAndUpdate(productId, productData, { new: true });
    }

    // Delete a product
    async deleteProduct(productId: string): Promise<IProduct | null> {
        logger.info('Deleting product', { productId });
        return await Product.findByIdAndDelete(productId);
    }
}

export { ProductService, IProduct };