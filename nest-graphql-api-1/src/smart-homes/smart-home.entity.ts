import { Field, Int, ObjectType } from "@nestjs/graphql";
// import { Entity, Column, PrimaryColumn } from "typeorm";

// @Entity()
// export class SmartHome{
//     @PrimaryColumn()
//     Device_ID: string;
//     @Column()
//     Serial_Number: string;
//     @Column()
//     DateTime: Date;
//     @Column()
//     Device_Name: string;
//     @Column()
//     User_Device_Name: string;
//     @Column()	
//     Device_Type: string;
//     @Column()
//     Device_Make: string;	
//     @Column()
//     Device_Model: string;	
//     @Column()
//     Device_Location: string;	
//     @Column()
//     Wattage: number;
// }

@ObjectType()
export class SmartHome {
    /* 
    Device_ID
        main: Main electrical panel within home
        always_on: Wattage attributed to consistent electrical consumption within the home
    Serial_Number: unique device within a household
    wattage: Electrical consumption for a device (Device_ID) within the home
    
    @Field(s) to include in schema
    */
    // @Field()
    // Serial_Number: string;
    // @Field()
    // DateTime: Date;	
    @Field()
    Device_ID: string;
    @Field()
    Device_Name: string;
    // @Field()
    // User_Device_Name: string;	
    // @Field()
    // Device_Type: string;
    // @Field()
    // Device_Make: string;	
    // @Field()
    // Device_Model: string;	
    // @Field()
    // Device_Location: string;	
    @Field(type => Int)
    Wattage: number;
}