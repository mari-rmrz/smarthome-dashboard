import { Query, Resolver } from "@nestjs/graphql";
import { SmartHome } from "./smart-home.entity";
import { SmartHomeService } from "./smart-home.service";

@Resolver(() => SmartHome)
export class SmartHomeResolver{
    constructor(private homeService: SmartHomeService){}

    @Query(returns => [SmartHome])
    homes(): Promise<SmartHome[]> {
        return this.homeService.getReadings();
    }
}