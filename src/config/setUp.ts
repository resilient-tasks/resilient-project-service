import { ProjectRepository } from "../domain/ProjectRepository";
import InMemoryProjectRepository from "../infrastructure/db/inMemory/inMemoryRepository";

class SetUp {
    private static instance: SetUp;
    private projectRepository: ProjectRepository;

    constructor() {
        this.projectRepository = new InMemoryProjectRepository();
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
}

export default SetUp;