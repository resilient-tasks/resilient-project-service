
import { Repository } from 'typeorm';
import { ProjectRepository } from '../../../domain/ProjectRepository';
import Project from '../../../domain/Project';
import { ProjectEntity } from './entities/ProjectEntity';
import { AppDataSource } from './datasources';
import { ProjectMapper } from './ProjectMapper';

export class TypeORMProjectRepository implements ProjectRepository {
  private ormRepo: Repository<ProjectEntity>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(ProjectEntity);
  }

  async create(project: Project): Promise<void> {
    const entity = ProjectMapper.toEntity(project);
    await this.ormRepo.save(entity);
  }

  async findAll(): Promise<Project[]> {
    const entities = await this.ormRepo.find();
    return entities.map(ProjectMapper.toDomain);
  }

  async findById(id: string): Promise<Project | null> {
    const entity = await this.ormRepo.findOneBy({ id });
    return entity ? ProjectMapper.toDomain(entity) : null;
  }

  async update(project: Project): Promise<void> {
    const entity = ProjectMapper.toEntity(project);
    await this.ormRepo.save(entity);
  }

  async delete(id: string): Promise<void> {
    await this.ormRepo.delete(id);
  }

  async findByOwnerId(ownerId: string): Promise<Project[]> {
    const entities = await this.ormRepo.find({ where: { ownerId } });
    return entities.map(ProjectMapper.toDomain);
  }
}
