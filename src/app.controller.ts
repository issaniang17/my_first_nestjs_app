import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('bonjour')
  direBonjour(): string {
    return "Bonjour depuis mon App Nest!"
  }
  @Get('info')
  info(){
    return {
      nom: 'Mon Api',
      version: '1.0.0',
      message: 'Bienvenue'
    }
  }
}
