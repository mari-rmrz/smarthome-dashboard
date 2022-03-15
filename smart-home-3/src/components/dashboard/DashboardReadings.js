import React from "react";
import { useQuery , gql } from '@apollo/client';

const GET_READINGS = gql`
query getAllReadings {
    readings(order_by: {DateTime: asc}) {
      Device_ID
      Device_Name
      Wattage
      DateTime
    }
  }
  `;

  const DashboardReadings = () => {
    const { loading, error, data } = useQuery(GET_READINGS);
 
   if (loading) {
     return <div>Loading...</div>;
   }
   if (error) {
     console.error(error);
     return <div>Error!</div>;
   }
   return data.readings;
  }

  export default DashboardReadings;