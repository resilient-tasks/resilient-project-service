import Project from "../../domain/Project";
import { ProjectRepository } from "../../domain/ProjectRepository";
import { CreateProjectDto } from "../dtos/createProjectDto";
import { v4 as uuidv4 } from 'uuid';

export async function createProject(projectRepository: ProjectRepository, projectData: CreateProjectDto) {
    const id = uuidv4();
    const project = new Project(id,projectData.name, projectData.description, projectData.ownerId);
    await projectRepository.create(project);
    return project;
}