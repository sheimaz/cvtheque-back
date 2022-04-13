import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";


@Entity('cvs')
export class CvEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  status: CvStatus;
  @ManyToOne(() => UserEntity, (user) => user.cvs)
  user: UserEntity
  @Column()
  userId: number;
}

export enum CvStatus {
  OPEN = 'OPEN',
  WIP = 'WIP',
  COMPLETED = 'COMPLETED'
}