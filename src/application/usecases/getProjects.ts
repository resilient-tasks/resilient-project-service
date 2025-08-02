import Project from "../../domain/Project";
import { ProjectRepository } from "../../domain/ProjectRepository";

export async function getProjects(projectRepository: ProjectRepository, ownerId: string): Promise<Project[]> {
    return await projectRepository.findByOwnerId(ownerId);
}