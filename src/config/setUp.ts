import { ProjectRepository } from "../domain/ProjectRepository";
import InMemoryProjectRepository from "../infrastructure/db/inMemory/inMemoryRepository";
import { ProjectEventPublisher } from "../infrastructure/events/ProjectEventPublisher";
import { RabbitProjectEventPublisher } from "../infrastructure/events/RabbitProjectEventPublisher";

class SetUp {
    private static instance: SetUp;
    private projectRepository: ProjectRepository;
    private projectEventPublisher: ProjectEventPublisher;

    constructor() {
        this.projectRepository = new InMemoryProjectRepository();
        this.projectEventPublisher = new RabbitProjectEventPublisher();
    }

    public static getInstance(): SetUp {
        if (!SetUp.instance) {
            SetUp.instance = new SetUp();
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