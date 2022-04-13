import  { IsDate, IsOptional, IsNotEmpty, MaxLength} from "class-validator";


export class CreateCvDto {
  @IsNotEmpty()
  @MaxLength(15, {message: 'Max length is 15 characters.'})
  title: string;
  @IsNotEmpty()
  description: string;

}