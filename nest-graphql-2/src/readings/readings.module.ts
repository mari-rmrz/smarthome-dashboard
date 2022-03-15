import { Module } from '@nestjs/common';
import { ReadingsService } from './readings.service';
import { ReadingsResolver } from './readings.resolver';

@Module({
  providers: [ReadingsService, ReadingsResolver]
})
export class ReadingsModule {}
