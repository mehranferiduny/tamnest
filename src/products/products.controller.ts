import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards, HttpException, Request, Req } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from 'src/jwt-auth/jwt-auth.guard';
import userGard from 'src/users/dto/userGard';



@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createProductDto: CreateProductDto, @Request() req) {
   const user : userGard=req.user;
   createProductDto.user=user;

   return this.productsService.create(createProductDto)
  }

  @Get()

  findAll() {
    return this.productsService.findAll()
  }

  @Get(':id')
  
  findOne(@Param('id') id: number) {
    return this.productsService.findOne(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto,@Request() req) {
    updateProductDto.user=req.user;
    return this.productsService.update(id, updateProductDto);
 
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: number,@Request() req) {
    return this.productsService.remove(id,req.user);
  }
}
