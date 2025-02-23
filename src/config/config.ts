import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Export the database URI from environment variables
export const DATABASE_URI = process.env.DATABASE_URI || '';
export const PORT = process.env.PORT || 8000;

