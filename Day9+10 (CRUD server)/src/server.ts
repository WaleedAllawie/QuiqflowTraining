import express, { type Express } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';
import dotenv from 'dotenv';
import database from './config/database.js';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/errorHandler.js';
import notFound from './middleware/notFound.js';

dotenv.config();

class Server {
  private static instance: Server;
  public app: Express;
  private port: number | string;
  private __dirname: string;

  private constructor() {
    this.app = express();
    this.port = process.env.PORT || 8000;

    const __filename = fileURLToPath(import.meta.url);
    this.__dirname = path.dirname(__filename);

    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorHandlers();
  }

  public static getInstance(): Server {
    if (!Server.instance) {
      Server.instance = new Server();
    }
    return Server.instance;
  }

  private initializeMiddlewares(): void {
    // Body parser
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    // Logger
    this.app.use(logger);
  }

  private initializeRoutes(): void {
    // API routes
    this.app.use('/api/posts', posts);

    // Static files
    this.app.use(express.static(path.join(this.__dirname, '..', 'public')));
  }

  private initializeErrorHandlers(): void {
    // 404 handler
    this.app.use(notFound);

    // Error handler
    this.app.use(errorHandler);
  }

  public async start(): Promise<void> {
    try {
      // Connect to database
      await database.connect();

      // Start server
      this.app.listen(this.port, () => {
        console.log(`Server is running on port ${this.port}`);
      });
    } catch (error) {
      console.error('Failed to start server:', error);
      process.exit(1);
    }
  }

  public getApp(): Express {
    return this.app;
  }
}

// Initialize and start the server
const server = Server.getInstance();
server.start();
