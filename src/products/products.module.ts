import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { UsersService } from 'src/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Users from 'src/entities/User.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Users])],
  controllers: [ProductsController],
  providers: [ProductsService,UsersService],
})
export class ProductsModule {}
