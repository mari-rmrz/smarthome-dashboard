// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   // creates nest app
//   const app = await NestFactory.create(AppModule);
//   // listen on port 3000
//   await app.listen(3000);
// }
// bootstrap();

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Create a server:
const app = express();

// Create a schema and a root resolver:
const schema = buildSchema(`
    type Device {
        Device_ID: String!
        Device_Name: String!
        Wattage: Int
    }

    type Query {
        Devices: [Device]
    }
`);

const rootValue = {
  Device: [
        {
            Device_ID: "001-bee",
            Device_Name: "Ecobee Thermostat",
            Wattage: 175,
        },
        {
          Device_ID: "002-ale",
          Device_Name: "Alexa Speaker",
          Wattage: 300,
      }
    ]
};

// Use those to handle incoming requests:
app.use(graphqlHTTP({
    schema,
    rootValue
}));

// Start the server:
app.listen(8080, () => console.log("Server started on port 8080"));