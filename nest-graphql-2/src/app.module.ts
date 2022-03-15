import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReadingsModule } from './readings/readings.module';

/*
  This was my second attempt to get graphQL set up
  I tried to follow the documentation found at https://docs.nestjs.com/graphql/quick-start 
  However I had troubles with the Apollo server and commenting it out runs the app but graphql schema isn't there
  I even tried following a tutorial https://www.youtube.com/watch?v=geYvdbpo3cA&t=322
  But when it came to test the query by checking localhost3000/graphql the playground didn't show
  For this reason I decided to stop fighting with these frameworks and work on the front end instead (see: smart-homes folder)
*/

@Module({
  imports: [
//     GraphQLModule.forRoot<ApolloDriverConfig>({
//       driver: ApolloDriver,
//       autoSchemaFile: true,
//       debug: false,
//       playground: false,
//     }),
//  ,
  ReadingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
