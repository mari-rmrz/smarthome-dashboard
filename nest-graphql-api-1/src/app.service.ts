import { Injectable } from '@nestjs/common';

// reach out to db here
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
