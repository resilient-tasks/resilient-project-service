import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { ProjectEntity } from './entities/ProjectEntity';
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'cockroachdb',
  url: process.env.DATABASE_URL,
  ssl: false,
  timeTravelQueries: false,
  synchronize: true,
  logging: false,
  entities: [ProjectEntity],
  migrations: [],
  subscribers: [],
});
