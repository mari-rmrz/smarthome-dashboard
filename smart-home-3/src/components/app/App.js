import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import './App.css';
import { useState } from 'react';
import  DashboardReadings  from '../dashboard/DashboardReadings';

// const client = new ApolloClient({
//   uri: "https://smarthome-dashboard.hasura.app/v1/graphql",
//   cache: new InMemoryCache(),
// });

/* 
  This was my last attempt to get an API working by using hasura
  However I kept having errors with the x-hasura-admin-secret headers
  and I wasn't able to figure out a fix for the issue.
  Since I was running out of time, I decided to focus on the front end part  in a new project folder (see: smarthome-dashboard folder)
*/
const createApolloClient = () => {
return new ApolloClient({
   link: new HttpLink({
      uri: 'https://smarthome-dashboard.hasura.app/v1/graphql',
    }),
    headers: {
      'x-hasura-admin-secret': 'xcwdsfEyLwh9pTcbbuE2XLvg7DTLr4KfECfR2nnQBqKu4PnajdBw0WyTPdgw3fAp'
    },
   cache: new InMemoryCache(),
 });
 };


const App = () => {
  const [client] = useState(createApolloClient());
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <p>
          Hello world
        </p>
      </header>
      <DashboardReadings />
    </div>
    </ApolloProvider>
  );
}

export default App;
