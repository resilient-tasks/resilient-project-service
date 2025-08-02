import { Request, Response } from 'express';
import { ProjectRepository } from '../../../domain/ProjectRepository';
import { createProject } from '../../../application/usecases/createProject';
import { CreateProjectDto } from '../../../application/dtos/createProjectDto';
import { Validations } from '../utils/validations';

export class ProjectController {
    constructor(private projectRepository: ProjectRepository) {}

    public async createProject (req: Request, res: Response) : Promise<void> {
        Validations.requierdFields(req.body.name, 'name');
        Validations.requierdFields(req.body.description, 'description');
        Validations.requierdFields(req.user!.sub, 'ownerId');

        const projectData: CreateProjectDto = {
            name: req.body.name,
            description: req.body.description,
            ownerId: req.user!.sub
        }
        const project = await createProject(this.projectRepository, projectData);
        res.status(201).json(project);
    }

    public async getProjects (req: Request, res: Response) : Promise<void> {
        res.send('Hello World');
    }

    public async getProjectById (req: Request, res: Response) : Promise<void> {
        res.send('Hello World');
    }

    public async updateProject (req: Request, res: Response) : Promise<void> {
        res.send('Hello World');
    }

    public async deleteProject (req: Request, res: Response) : Promise<void> {
        res.send('Hello World');
    }
}