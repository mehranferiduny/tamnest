import { IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from 'class-validator'
import userGard from 'src/users/dto/userGard';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(12)
  readonly title:string;
  @IsString()
  @IsNotEmpty()
  @MinLength(12)
  @MaxLength(29)
  readonly desc:string;
  @IsNumber()
  @IsOptional()
  readonly price:number;

  @IsOptional()
  user:userGard;
}
