import {
  Body, ClassSerializerInterceptor,
  Controller, Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseInterceptors,
  UseGuards
} from "@nestjs/common";
import { CvService } from "./cv.service";
import { CreateCvDto } from "../DTO/create-cv.dto";
import { stat } from "fs";
import { AuthGuard } from "@nestjs/passport";
import { User } from "../auth/user.decorator";
import { UserEntity } from "../Entity/user.entity";

// http://localhost:3000/cvs
@Controller('CVs')
@UseGuards(AuthGuard())
export class CvController {
  constructor(private cvService: CvService){}


  @Get()
  getAllCvs(@User() user: UserEntity) {
    //console.log(this.cvService.getAllCvs());
    return this.cvService.getAllCvs(user);
  }
 

  @Post()
   createNewCv(@Body() data: CreateCvDto,
                @User() user: UserEntity) {
     const {title, description} = data;

     return this.cvService.createCv(data, user);
   }

    @Patch(':id')
     updateCv(
       //@Body('status', CvStatusValidationPipe) status: CvStatus,
       @Param('id') id: number,
       @User() user: UserEntity
     ) {
         return this.cvService.update(id, user);
     }

    @Delete(":id")
    deleteCv(@Param("id") id: number,
                 @User() user: UserEntity) {
        return this.cvService.delete(id, user);
      }



}