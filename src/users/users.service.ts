import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll(){
    return []
  }

  findById(id:number){
    return{
      id,
      name:"mehran",
      username:"m3hr4nus"
    }
  }
  findUserByUserName(username:string){
    return{
      id:1,
      name:"mehran",
      username,
    }
  }
}
