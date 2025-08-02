import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import projectRouter from './src/infrastructure/http/routes/projectRoutes';
import SetUp from './src/config/setUp';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const setUp = SetUp.getInstance();
app.use('/api/projects', projectRouter(setUp.getProjectRepository()));

app.get('/health', (_, res) => res.send('Project service up'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Project service running on port ${PORT}`));
