import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import projectRouter from './infrastructure/http/routes/projectRoutes';
import SetUp from './config/setUp';
import { errorHandler } from './infrastructure/http/middlewares/errorHandler';

dotenv.config();

async function bootstrap() {
  try {
    const setUp = await SetUp.getInstance();

    const app = express();
    app.use(cors());
    app.use(express.json());

    app.use('/api/projects', projectRouter(
      setUp.getProjectRepository(),
      setUp.getProjectEventPublisher()
    ));

    app.use(errorHandler);

    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`🚀 Project service running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error during app initialization:', error);
    process.exit(1);
  }
}

bootstrap();
