import { Query, Resolver } from '@nestjs/graphql';
import { Reading } from './reading.entity';
import { ReadingsService } from './readings.service';

@Resolver(of => Reading)
export class ReadingsResolver {
    constructor(private readingsService: ReadingsService){}

    @Query(returns => [Reading])
    homes(): Promise<Reading[]> {
        return this.readingsService.getReadings();
    }
}
