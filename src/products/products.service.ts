import { HttpException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import Product from 'src/entities/Product.entity';
import { Repository } from 'typeorm';
import userGard from 'src/users/dto/userGard';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly product_repos:Repository<Product>
  ){}
  async create(createProductDto: CreateProductDto) {
    const new_product=await this.product_repos.save(createProductDto)
    return new_product;
  }

  findAll=async()=> {
    const products= await this.product_repos.find(
      {
      relations:{
        user:true
      }
    }
    );
    const cuont=products.length;
    return{
      cuont,products
    }
  }

 async findOne(id: number) {
    const product= await this.product_repos.findOne({
      where:{
        id,
      }
    });
    if(!product){ throw new HttpException("product not found!",404)}
    return product;
  }

  update=async(id: number, updateProductDto: UpdateProductDto)=> {
    const productcheek=await this.product_repos.update({id,user:updateProductDto.user},{...updateProductDto});
    if(productcheek.affected === 0){throw new HttpException("product not found for update!",404)}
    return `update : secsesfuly`
  }

  remove=async(id: number,user: userGard)=> {
    const chekproduct=await this.product_repos
    .createQueryBuilder('Product')
    .leftJoinAndSelect('Product.user','Users')
    .where('Product.id= :id',{id})
    .andWhere('Product.user= :user',{user:user.id})
    .getOne();


    if(!chekproduct){throw new HttpException("product not found!",404)}
    await this.product_repos.delete(id);
    return 'remove product secsesfuly!'
  }
}
