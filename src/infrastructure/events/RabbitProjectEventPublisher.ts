import { ProjectEventPublisher } from './ProjectEventPublisher';

export class RabbitProjectEventPublisher implements ProjectEventPublisher {
  async publishProjectDeleted(projectId: string): Promise<void> {
    // TODO: implementar con RabbitMQ en el futuro
    console.log(`[RabbitMQ] ProjectDeleted event published: ${projectId}`);
  }
}
