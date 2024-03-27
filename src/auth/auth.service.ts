import { HttpException, Injectable } from '@nestjs/common';
import { LoginDot } from './dto/login.dto';
import { RegisterDot } from './dto/register.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
 
  constructor(private readonly user_servises:UsersService, private readonly JwtService:JwtService){}

  register=async(RegisterDot:RegisterDot)=>{

      const user =await this.user_servises.findUserByEmail(RegisterDot.email)
    if(user) {
       throw new HttpException("user already by exist",400)  
    }
    RegisterDot.password=await this.user_servises.hashpassword(RegisterDot.password)
   return await this.user_servises.craeteUser(RegisterDot)
  
  }
  login= async(LoginDot:LoginDot)=>{
    const user=await this.user_servises.findUserByEmail(LoginDot.email);

      if(!user){
        throw new HttpException("user not fond!",404);
      }
     const isMachPass= await this.user_servises.comperPass(LoginDot.password,user.password) 
     if(!isMachPass){
      throw new HttpException("password is woring",400);
     }
      const acsses_token= this.JwtService.sign({id:user.id,email:user.email})
      return{
        acsses_token:acsses_token
      }
  }

  
}
