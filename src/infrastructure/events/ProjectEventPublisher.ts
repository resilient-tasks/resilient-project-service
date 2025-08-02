interface ProjectEventPublisher {
    publishProjectDeleted(projectId: string): Promise<void>;
}

export { ProjectEventPublisher };