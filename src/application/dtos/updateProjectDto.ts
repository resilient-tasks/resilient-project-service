import { AccessProjectByIdDto } from "./accessProjectByIdDto";

export interface UpdateProjectDto {
    name?: string;
    description?: string;
    accessProjectByIdDto: AccessProjectByIdDto;
}