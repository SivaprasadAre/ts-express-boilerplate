import { Schema, model } from 'mongoose';
import { IProduct } from '../types/IProductTypes'

const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
}, { timestamps: true });

const Product = model<IProduct>('Product', productSchema);

export { Product, IProduct };