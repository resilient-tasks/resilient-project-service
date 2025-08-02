import { BadRequestException, ForbiddenException, NotFoundException } from "../../../domain/HttpException";
import Project from "../../../domain/Project";

export class Validations {

    public static requierdFields(value: any, field: string) {
        if (!value) {
            throw new BadRequestException(`${field} is required`);
        }
    }

    public static validateOwnership(currentUserId: string, projectOwnerId: string, role: string) {
        if (currentUserId !== projectOwnerId && role !== 'admin') {
            throw new ForbiddenException('You are not allowed to access this project');
        }
    }

    public static validateProjectExists(project: Project | null) {
        if (!project) {
            throw new NotFoundException('Project not found');
        }
    }
}