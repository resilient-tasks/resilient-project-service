import { ProjectRepository } from "../../domain/ProjectRepository";
import { UpdateProjectDto } from "../dtos/updateProjectDto";
import { Validations } from "../../infrastructure/http/utils/validations";

export async function updateProject(projectRepository: ProjectRepository, updateProjectDto: UpdateProjectDto) {
    const project = await projectRepository.findById(updateProjectDto.accessProjectByIdDto.projectId);
    Validations.validateProjectExists(project);
    Validations.validateOwnership(updateProjectDto.accessProjectByIdDto.userId, project!.ownerId, updateProjectDto.accessProjectByIdDto.userRole);
    project!.update(updateProjectDto.name, updateProjectDto.description);
    await projectRepository.update(project!);
    return project;
}