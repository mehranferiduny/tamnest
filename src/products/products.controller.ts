import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { UsersService } from 'src/users/users.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    // return this.productsService.create(createProductDto);
    console.log(createProductDto.price)
    if(createProductDto.price > 1000){
      throw new Error("price is higeh")
    }
  return {message:"ok", data :createProductDto};
  }

  @Get()
  findAll() {
    return []
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
