import { ProjectRepository } from "../../domain/ProjectRepository";
import { AccessProjectByIdDto } from "../dtos/accessProjectByIdDto";
import { Validations } from "../../infrastructure/http/utils/validations";
import { RabbitProjectEventPublisher } from "../../infrastructure/events/RabbitProjectEventPublisher";
import { ProjectEventPublisher } from "../../infrastructure/events/ProjectEventPublisher";

export async function deleteProject(projectRepository: ProjectRepository, projectEventPublisher: ProjectEventPublisher, accessProjectByIdDto: AccessProjectByIdDto) {
    const project = await projectRepository.findById(accessProjectByIdDto.projectId);
    Validations.validateProjectExists(project);
    Validations.validateOwnership(accessProjectByIdDto.userId, project!.ownerId, accessProjectByIdDto.userRole);
    await projectEventPublisher.publishProjectDeleted(accessProjectByIdDto.projectId);
    await projectRepository.delete(accessProjectByIdDto.projectId);
}