import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ReadingsModule } from './readings/readings.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
