import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService,UsersService],
})
export class ProductsModule {}
