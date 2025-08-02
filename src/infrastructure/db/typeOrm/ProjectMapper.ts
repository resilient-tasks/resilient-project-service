import Project from '../../../domain/Project';
import { ProjectEntity } from './entities/ProjectEntity';

export class ProjectMapper {
  static toEntity(project: Project): ProjectEntity {
    const entity = new ProjectEntity();
    entity.id = project.id;
    entity.name = project.name;
    entity.description = project.description;
    entity.ownerId = project.ownerId;
    entity.createdAt = project.createdAt;
    entity.updatedAt = project.updatedAt;
    return entity;
  }

  static toDomain(entity: ProjectEntity): Project {
    const project = new Project(entity.id, entity.name, entity.description, entity.ownerId);
    if (entity.updatedAt) project.setUpdatedAt(entity.updatedAt);
    project.createdAt = entity.createdAt;
    return project;
  }
}
