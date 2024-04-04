import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Users from "./User.entity";

@Entity("Product")
export default class Product{

  @PrimaryGeneratedColumn()
  id:number;

  @Column({nullable:true})
  title:string;

  @Column({nullable:true})
  desc:string;

  @Column({nullable:true})
  price:number;

  @Column('inet',{nullable:true})
  @ManyToOne(()=>Users,(user)=>user.id)
  @JoinColumn({name:"user"})
  user:Users;
}