import {Column, Entity,PrimaryGeneratedColumn} from 'typeorm'

@Entity('Users')
export default class Users{
  @PrimaryGeneratedColumn()
  id:number;

  @Column({unique:true,nullable:false})
  email:string;
 
  @Column({length:25,nullable:true})
  firstName:string;

  @Column({length:25, nullable:true})
  lastName:string;

  @Column({nullable:false })
  password:string;

  @Column({nullable:true})
  age:number;

}