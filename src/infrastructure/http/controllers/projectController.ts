import { Request, Response } from 'express';
import { ProjectRepository } from '../../../domain/ProjectRepository';
import { createProject } from '../../../application/usecases/createProject';
import { getProjectById } from '../../../application/usecases/getProjectById';
import { CreateProjectDto } from '../../../application/dtos/createProjectDto';
import { Validations } from '../utils/validations';
import { AccessProjectByIdDto } from '../../../application/dtos/accessProjectByIdDto';
import { deleteProject } from '../../../application/usecases/deleteProject';
import { ProjectEventPublisher } from '../../events/ProjectEventPublisher';
import { UpdateProjectDto } from '../../../application/dtos/updateProjectDto';
import { updateProject } from '../../../application/usecases/updateProject';

export class ProjectController {
    constructor(private projectRepository: ProjectRepository, private projectEventPublisher: ProjectEventPublisher) {}

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
        Validations.requierdFields(req.params.id, 'id');
        Validations.requierdFields(req.user!.sub, 'ownerId');
        Validations.requierdFields(req.user!.role, 'userRole');

        const accessProjectByIdDto: AccessProjectByIdDto = {
            projectId: req.params.id,
            userId: req.user!.sub,
            userRole: req.user!.role
        }

        const project = await getProjectById(this.projectRepository, accessProjectByIdDto);
        res.status(200).json(project);
    }

    public async updateProject (req: Request, res: Response) : Promise<void> {
        Validations.requierdFields(req.params.id, 'id');
        Validations.requierdFields(req.user!.sub, 'ownerId');
        Validations.requierdFields(req.user!.role, 'userRole');

        const updateProjectDto: UpdateProjectDto = {
            name: req.body.name,
            description: req.body.description,
            accessProjectByIdDto: {
                projectId: req.params.id,
                userId: req.user!.sub,
                userRole: req.user!.role
            }
        }

        const updatedProject = await updateProject(this.projectRepository, updateProjectDto);
        res.status(200).json(updatedProject);
    }

    public async deleteProject (req: Request, res: Response) : Promise<void> {
        Validations.requierdFields(req.params.id, 'id');
        Validations.requierdFields(req.user!.sub, 'ownerId');
        Validations.requierdFields(req.user!.role, 'userRole');

        const accessProjectByIdDto: AccessProjectByIdDto = {
            projectId: req.params.id,
            userId: req.user!.sub,
            userRole: req.user!.role
        }

        await deleteProject(this.projectRepository, this.projectEventPublisher, accessProjectByIdDto);
        res.status(204).send();
    }
}