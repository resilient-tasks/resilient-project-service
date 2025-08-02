import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('projects')
export class ProjectEntity {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  ownerId!: string;

  @Column()
  createdAt!: Date;

  @Column({ nullable: true })
  updatedAt?: Date;
}
