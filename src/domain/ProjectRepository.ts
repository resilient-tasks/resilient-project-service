import Project from "./Project";

export interface ProjectRepository {
    create(project: Project): Promise<void>;
    findAll(): Promise<Project[]>;
    findById(id: string): Promise<Project | null>;
    update(project: Project): Promise<void>;
    delete(id: string): Promise<void>;
}