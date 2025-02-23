import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import connectMongoDB from './config/database';
import { PORT } from './config/config';
import { logger } from './utils/logger';
import { errorMiddleware } from './middlewares/error.middleware';
import { router } from './routes/index';

export default class App {
    private expressApp: Express;

    constructor() {
        this.expressApp = express();
        this.initializeApp();
    }

    // Public getter for expressApp
    public get app(): Express {
        return this.expressApp;
    }

    private async initializeApp(): Promise<void> {
        try {
            logger.info('Initializing NodeJS application...');
            await this.connectToMongoDB();
            this.setMiddleware();
            this.mountRoutes();
            this.setupHeaders();
        } catch (err) {
            logger.error('Application initialization failed:', err);
        }
    }

    private async connectToMongoDB(): Promise<void> {
        try {
            await connectMongoDB();
            logger.info('Connected to MongoDB');
        } catch (err) {
            logger.error('MongoDB connection error:', err);
            throw err;  // Rethrow error for proper handling
        }
    }

    private setMiddleware(): void {
        // Middleware for parsing JSON and URL encoded data
        this.expressApp.use(express.json());
        this.expressApp.use(express.urlencoded({ extended: false }));

        // Enable CORS for cross-origin requests
        this.expressApp.use(cors());
    }

    private setupHeaders(): void {
        // Middleware to handle trailing slashes in request URL
        this.expressApp.use((req: Request, res: Response, next: NextFunction): void => {
            if (req.url.endsWith('/')) {
                logger.info(`Request received with trailing slash: ${req.url}`);
                res.status(200).json({
                    message: 'Welcome To NodeJS!',
                });
            } else next();
        });

        // Global error handling middleware
        this.expressApp.use(errorMiddleware);
    }

    private mountRoutes(): void {
        // Mount all routes under /v1
        this.expressApp.use('/v1', router);
    }
}

// Initialize the application and start the server
const { app } = new App();
app.listen(PORT, () => {
    logger.info(`[server]: Server is running at http://localhost:${PORT}`);
});
