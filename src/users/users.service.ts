import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Users from 'src/entities/User.entity';
import { Repository } from 'typeorm';
import { UserDot } from './dto/register.dto';
import * as bycript from 'bcryptjs'

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Users)
    private readonly users_Repository : Repository<Users>
  ){}

  hashpassword=async(password:string):Promise<string>=>{
   try {
    return await bycript.hash(password,10)
   } catch (err) {
    console.log(err)
   }
  }

  comperPass=async(password:string,userPassword:string): Promise<boolean>=>{
  return await bycript.compare(password,userPassword)
  }


  craeteUser=async(data:UserDot): Promise<UserDot>=>{
    try {

      const user=await this.users_Repository.create(data)
    this.users_Repository.save(user);
    return user;
    } catch (err) {
      console.log(err)
    }
    
  }

   findUserByEmail=async(email:string)=>{
    try {
      return await this.users_Repository.findOne({
        where: {email:email}
      })

      
    } catch (err) {
      console.log(err)
      
    }
  
   }

}
