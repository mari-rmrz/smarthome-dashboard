import { Injectable } from '@nestjs/common';
import { Reading } from './reading.entity';

@Injectable()
export class ReadingsService {
    async getReadings(): Promise<Reading[]> {
        const home = new Reading();
        home.Device_ID = "1111";
        home.Serial_Number = "eco-11";

        return [home];
    }
}
