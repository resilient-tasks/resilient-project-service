import { ProjectRepository } from "../domain/ProjectRepository";
import { TypeORMProjectRepository } from "../infrastructure/db/typeOrm/TypeOrmRepository";
import { AppDataSource } from "../infrastructure/db/typeOrm/datasources";
import { ProjectEventPublisher } from "../infrastructure/events/ProjectEventPublisher";
import { RabbitProjectEventPublisher } from "../infrastructure/events/RabbitProjectEventPublisher";

class SetUp {
  private static instance: SetUp;
  private projectRepository!: ProjectRepository;
  private projectEventPublisher!: ProjectEventPublisher;

  private constructor() {}

  public static async getInstance(): Promise<SetUp> {
    if (!SetUp.instance) {
      const instance = new SetUp();
      await AppDataSource.initialize();
      instance.projectRepository = new TypeORMProjectRepository();
      instance.projectEventPublisher = new RabbitProjectEventPublisher();
      SetUp.instance = instance;
    }
    return SetUp.instance;
  }

  public getProjectRepository(): ProjectRepository {
    return this.projectRepository;
  }

  public getProjectEventPublisher(): ProjectEventPublisher {
    return this.projectEventPublisher;
  }
}

export default SetUp;
