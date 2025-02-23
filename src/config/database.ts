import mongoose from 'mongoose';
import { DATABASE_URI } from './config';
import { logger } from '../utils/logger';

const connectMongoDB = async () => {
    try {
        // Connect to the MongoDB database using the updated options
        return await mongoose.connect(DATABASE_URI);
    } catch (err) {
        logger.error('Error connecting to database:', err);
        process.exit(1); // Exit the application if the connection fails
    }
};

export default connectMongoDB;
