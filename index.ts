import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import projectRouter from './src/infrastructure/http/routes/projectRoutes';
import SetUp from './src/config/setUp';
import { errorHandler } from './src/infrastructure/http/middlewares/errorHandler';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const setUp = SetUp.getInstance();
app.use('/api/projects', projectRouter(setUp.getProjectRepository(), setUp.getProjectEventPublisher()));

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Project service running on port ${PORT}`));
