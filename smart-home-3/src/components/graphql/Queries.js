import { gql } from "@apollo/client";

export const GET_ALL_READINGS = gql`
query getAllReadings {
  readings(order_by: {DateTime: asc}) {
    Device_ID
    Device_Name
    Wattage
    DateTime
  }
}`;