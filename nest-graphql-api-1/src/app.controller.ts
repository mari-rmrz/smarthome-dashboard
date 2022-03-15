import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// handle incoming requests and sends responses
@Controller()
export class AppController {
  // expecting appService of type AppService, created from providers: [AppService]
  constructor(private readonly appService: AppService) {}

  // method gets executed when controller is triggered
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
