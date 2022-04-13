import { Module } from '@nestjs/common';
import { CvController } from './cv.controller';
import { CvService } from './cv.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CvEntity } from "../Entity/cv.entity";
import { AuthModule } from "../auth/auth.module";


@Module({
  imports: [
   TypeOrmModule.forFeature([CvEntity]),
   AuthModule],
  controllers: [CvController],
  providers: [CvService]
})
export class CvModule {}
