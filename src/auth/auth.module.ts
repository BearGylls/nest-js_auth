import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service'

@Module({
    imports: [],
    controllers: [AuthController],
    providers: [AuthService],
  })
  export class AuthModule {}