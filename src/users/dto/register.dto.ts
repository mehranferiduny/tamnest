import { IsEmail } from 'class-validator'

export class UserDot {
 @IsEmail()
  email: string;

  password: string;
  lastName: string;
  firstName: string;
  age: number;

}
