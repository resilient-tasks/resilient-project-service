// src/infrastructure/http/routes/projectRoutes.ts
import { Router } from 'express';
import { ProjectController } from '../controllers/projectController';
import { authenticateJWT } from '../middlewares/authenticateJWT';
import { ProjectRepository } from '../../../domain/ProjectRepository';

const projectRouter = (projectRepository: ProjectRepository): Router => {
  const router = Router();
  const projectController = new ProjectController(projectRepository);

  router.use(authenticateJWT);

  router.post('/', (req, res) => projectController.createProject(req, res));
  router.get('/', (req, res) => projectController.getProjects(req, res));
  router.get('/:id', (req, res) => projectController.getProjectById(req, res));
  router.put('/:id', (req, res) => projectController.updateProject(req, res));
  router.delete('/:id', (req, res) => projectController.deleteProject(req, res));

  return router;
};

export default projectRouter;
