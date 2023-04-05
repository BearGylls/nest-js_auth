import { Controller, Req, Get, Post, Put } from '@nestjs/common';
import { Header } from '@nestjs/common';

@Controller('auth') 
export class AuthController {
    @Get()
    index(){
        return 'index page';
    }
    @Post()
    @Header('Cache-Control', 'none')
    post(){
        return 'post route'
    }
    /*
    @Put()*/
}
