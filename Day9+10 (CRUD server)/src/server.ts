import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/errorHandler.js';
import notFound from './middleware/notFound.js';

dotenv.config();

const app = express();
const port: number | string = process.env.PORT || 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Test database connection and sync models
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully');

    // Sync models (creates tables if they don't exist)
    await sequelize.sync({ alter: true });
    console.log('✅ Database synced');
  } catch (error) {
    console.error('❌ Unable to connect to database:', error);
    process.exit(1);
  }
};

connectDB();

//BODY PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//logger
app.use(logger);
//routes
app.use('/api/posts', posts);

app.use(express.static(path.join(__dirname, '..', 'public')));
//middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running on port 8000`);
});
