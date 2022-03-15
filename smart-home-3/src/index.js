import React from 'react';
import {render} from 'react-dom';
import App from './components/app/App';
import './index.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://smarthome-dashboard.hasura.app/v1/graphql',
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        'x-hasura-admin-secret': "xcwdsfEyLwh9pTcbbuE2XLvg7DTLr4KfECfR2nnQBqKu4PnajdBw0WyTPdgw3fAp"
      }
    }
  },
  cache: new InMemoryCache()
});

// function HomeReadings() {
//   const {loading, error, data} = useQuery(GET_ALL_READINGS);

//   if (loading) return 'Loading...';
//   if (error) return `Error ${error.message}`;

//   return data.readings.map(({ Device_ID, Device_Name, Wattage, DateTime }) => (
//     <div key={Device_ID}>
//       <p>
//         {DateTime}
//         {Device_ID}: {Device_Name}
//         {Wattage}
//       </p>
//     </div>
//   ));
// }

// function App() {
//   return (
//     <>
//       <h2>Here's the data! 🚀</h2>
//       <DashboardReadings />
//     </>
//   )
// }

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

export default App;