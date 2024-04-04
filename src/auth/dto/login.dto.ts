import { IsNotEmpty, IsString } from "class-validator"

export class LoginDot {
    @IsString()
    @IsNotEmpty()
    email:string

    @IsString()
    @IsNotEmpty()
    password:string
}

