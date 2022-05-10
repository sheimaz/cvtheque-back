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
  @ManyToOne(() => UserEntity, (user) => user.cvs)
  user: UserEntity
  @Column()
  userId: number;
}

