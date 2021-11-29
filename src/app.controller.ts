import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('suma')
  newEndpoint() {
    let a = 20;
    let b = 50;

    return a + b;
  }

  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }
}
