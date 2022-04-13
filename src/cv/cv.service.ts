import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CvEntity, CvStatus } from "../Entity/cv.entity";
import { Repository } from "typeorm";
import { CreateCvDto } from "../DTO/create-cv.dto";
import { UserEntity } from "../Entity/user.entity";


@Injectable()
export class CvService {

  constructor(@InjectRepository(CvEntity) private repo: Repository<CvEntity>) {
  }


  async getAllCvs(user: UserEntity) {
      const query = await this.repo.createQueryBuilder('cv');

      query.where(`cv.userId = :userId`, {userId: user.id});

      try {
        return await query.getMany();
      } catch (err) {
        throw new NotFoundException('No cv found');
      }


    }

  async createCv(createCvDTO: CreateCvDto, user: UserEntity){
    const cv = new CvEntity();
    const {title, description} = createCvDTO;
    cv.title = title;
    cv.description = description;
    cv.status = CvStatus.OPEN;
    cv.userId = user.id;


    this.repo.create(cv);
    try {
          return await this.repo.save(cv);
        } catch (err) {
          console.log(err.stack);
          throw new InternalServerErrorException('Something went wrong, cv not created');
        }
  }
   async update(id: number, status: CvStatus, user: UserEntity) {
      try {
        await this.repo.update({id, userId: user.id}, {status});
        return this.repo.findOne({id});
      } catch (err) {
        throw new InternalServerErrorException('Something went wrong');
      }

    }

    async delete(id: number, user: UserEntity) {
       const result = await this.repo.delete({id, userId: user.id});

       if (result.affected === 0) {
         throw new NotFoundException('Cv not deleted');
       } else {
         return { success: true}
       }



   }
}
