import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards, HttpException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { UsersService } from 'src/users/users.service';
import { JwtAuthGuard } from 'src/jwt-auth/jwt-auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    // return this.productsService.create(createProductDto);
    // console.log(createProductDto.price)
    if(createProductDto.price > 1000){
      throw new HttpException("price is higeh",400)
    }
  return {message:"ok", data :createProductDto};
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(dtoProduct:CreateProductDto) {
    return {
      message:"ok",
      data:{
       dtoProduct
      }
    }
    // return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return {id};
    // return this.productsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    // return this.productsService.update(+id, updateProductDto);
    return {methods:"put" , id}
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
