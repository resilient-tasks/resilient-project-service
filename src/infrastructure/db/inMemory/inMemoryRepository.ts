import Project from "../../../domain/Project";
import { ProjectRepository } from "../../../domain/ProjectRepository";

class InMemoryProjectRepository implements ProjectRepository {
    private projects: Project[] = [];

    async create(project: Project): Promise<void> {
        this.projects.push(project);
    }

    async findAll(): Promise<Project[]> {
        return this.projects;
    }

    async findById(id: string): Promise<Project | null> {
        return this.projects.find(project => project.id === id) || null;
    }

    async update(project: Project): Promise<void> {
        const index = this.projects.findIndex(p => p.id === project.id);
        if (index !== -1) {
            this.projects[index] = project;
        }
    }

    async delete(id: string): Promise<void> {
        this.projects = this.projects.filter(project => project.id !== id);
    }

    async findByOwnerId(ownerId: string): Promise<Project[]> {
        return this.projects.filter(project => project.ownerId === ownerId);
    }
}

export default InMemoryProjectRepository;