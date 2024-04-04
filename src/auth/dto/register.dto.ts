import { IsEmail, IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class RegisterDot {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Min(6)
  @Max(12)
  password: string;

  @IsString()
  @IsNotEmpty()
  @Min(2)
  @Max(12)
  lastName: string;
  @IsString()
  @IsNotEmpty()
  @Min(2)
  @Max(12)
  firstName: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

}
