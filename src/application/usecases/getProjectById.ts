import { ProjectRepository } from "../../domain/ProjectRepository";
import { Validations } from "../../infrastructure/http/utils/validations";
import { AccessProjectByIdDto } from "../dtos/accessProjectByIdDto";

export async function getProjectById(projectRepository: ProjectRepository, accessProjectByIdDto: AccessProjectByIdDto) {
    const project = await projectRepository.findById(accessProjectByIdDto.projectId);
    Validations.validateProjectExists(project);
    Validations.validateOwnership(accessProjectByIdDto.userId, project!.ownerId, accessProjectByIdDto.userRole);
    return project;
}