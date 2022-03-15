import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Reading {
    @Field({nullable: true})
    Device_ID?: string;
    
    @Field()
    Serial_Number: string;
    
    @Field(type => Int)
    Wattage: number;
}