import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDot } from './dto/login.dto';
import { RegisterDot } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() RegisterDot: RegisterDot) {
    return this.authService.register(RegisterDot)
  }

  @Post('login')
  login(@Body() LoginDot: LoginDot) {
   return this.authService.login(LoginDot)
  }

 
}
