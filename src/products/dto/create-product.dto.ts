import { IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from 'class-validator'

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(12)
  readonly name:string;
  @IsString()
  @IsNotEmpty()
  @MinLength(12)
  @MaxLength(29)
  readonly desc:string;
  @IsNumber()
  @IsOptional()
  readonly price:number;
}
