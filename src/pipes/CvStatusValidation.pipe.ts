import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { CvStatus } from "../Entity/cv.entity";

export class CvStatusValidationPipe implements PipeTransform {
  readonly allowedStatus = [CvStatus.OPEN, CvStatus.WIP, CvStatus.COMPLETED];

  transform(value: any, metadata: ArgumentMetadata): any {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is an invalid status.`);
    }
    return value;
  }

  private isStatusValid(status : any) {
    const index = this.allowedStatus.indexOf(status);

    return index !== -1;
  }

}