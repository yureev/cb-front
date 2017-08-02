import { ApolloClient, createNetworkInterface} from 'apollo-client';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://cb.redeye.software/graphql'
  }),
});

export function provideClient(): ApolloClient {
  return client;
}
