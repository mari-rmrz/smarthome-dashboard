import { Injectable } from "@nestjs/common";
import { SmartHome } from "./smart-home.entity";

@Injectable()
export class SmartHomeService{
    async getReadings(): Promise<SmartHome[]> {
        const home = new SmartHome();
        home.Device_ID = "001-bee";
        home.Device_Name = "Ecobee Thermostat";
        home.Wattage = 175;
        return [home];
    }
}