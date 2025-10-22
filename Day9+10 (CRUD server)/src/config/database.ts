import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
  database: process.env.DB_NAME || 'QuiqFlowTraining',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '1753',
  host: process.env.DB_HOST || '127.0.0.1',
  port: parseInt(process.env.DB_PORT || '5432'),
  dialect: 'postgres',
  logging: false,
});

export default sequelize;
