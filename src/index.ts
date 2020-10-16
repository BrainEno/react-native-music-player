import { ApolloClient, InMemoryCache,gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:4466',
  cache: new InMemoryCache()
});

