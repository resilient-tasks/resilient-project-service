import { BadRequestException } from "../../../domain/HttpException";

export class Validations {

    public static requierdFields(value: any, field: string) {
        if (!value) {
            throw new BadRequestException(`${field} is required`);
        }
    }
}