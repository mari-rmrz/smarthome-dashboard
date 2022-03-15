import { Module } from "@nestjs/common";   
import { SmartHomeResolver } from "./smart-home.resolver";
import { SmartHomeService } from "./smart-home.service";

@Module({
    providers: [SmartHomeService, SmartHomeResolver]
})
export class SmartHomesModule{}