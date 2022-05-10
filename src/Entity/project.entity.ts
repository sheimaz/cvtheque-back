import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('projects')
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  date: string;
  @Column()
  status: ProjectStatus;
}
export enum ProjectStatus {
  OPEN = 'OPEN',
  WIP = 'WIP',
  COMPLETED = 'COMPLETED'
}