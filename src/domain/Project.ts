export class Project {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date | undefined;
    ownerId: string;  

    constructor(
        id: string,
        name: string,
        description: string,
        ownerId: string
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.createdAt = new Date();
        this.ownerId = ownerId;
    }

    setUpdatedAt(updatedAt: Date) {
        this.updatedAt = updatedAt;
    }
}

export default Project;