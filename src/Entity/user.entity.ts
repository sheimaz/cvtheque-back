import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcryptjs';
import { CvEntity } from "./cv.entity";
@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
  
  @Column()
  job: string;

  @Column()
  salt: string;

  @OneToMany(() => CvEntity, (cv) => cv.user )
  cvs: CvEntity[]
  
}