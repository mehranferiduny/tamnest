import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Users from 'src/entities/User.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategiy/jwt.strategy';

@Module({
  imports : [TypeOrmModule.forFeature([Users]),
  JwtModule.register({
    secret:"secrettow",
    signOptions:{expiresIn:'1d'}
  })  
],
  controllers: [AuthController],
  providers: [AuthService , UsersService,JwtStrategy],
})
export class AuthModule {}
