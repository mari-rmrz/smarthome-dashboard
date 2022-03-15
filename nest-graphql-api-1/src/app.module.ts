import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { SmartHomeService } from './smart-homes/smart-home.service';

/* 
  Unfortunately I was unable to get this to work
  I kept getting an error with being able to create the graphql schema
  For this reason I switched to using hasura and trying to talk to it from the front end (folder: smart-home)
*/

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    }),
    SmartHomeService,
  ],
  controllers: [AppController], // handles incoming requests and send responses
  providers: [AppService], // class that will get passed on later in the AppController
})
export class AppModule {}
