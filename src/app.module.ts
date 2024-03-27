import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import{TypeOrmModule} from '@nestjs/typeorm'
import { AuthModule } from './auth/auth.module';
import Users from './entities/User.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    // url:"mongodb://127.0.0.1:27017/nestjs",
    // useUnifiedTopology:true,
    host: 'localhost',
    port: 5432,
    username:'postgres',
    password: 'mypgadmin',
    database: 'postgres',
    entities:[__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
  }),
  TypeOrmModule.forFeature([Users]),
  UsersModule, ProductsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
    
  }
}
