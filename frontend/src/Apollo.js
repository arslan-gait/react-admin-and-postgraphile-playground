import { ApolloClient as _ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: 'http://localhost:5000/graphql'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoicGFydG5lciIsInN1YiI6IjEwMDAwMDAzLWE5MGItMTFlYi1iY2JjLTAyNDJhYzEzMDAwMiIsImV4cCI6MTY0MjQ4NjU5MCwic2VzcyI6bnVsbCwiaWF0IjoxNjQyNDAwMTg5LCJhdWQiOiJwb3N0Z3JhcGhpbGUiLCJpc3MiOiJwb3N0Z3JhcGhpbGUifQ.pky5O_ZsNFZKmSoYna526KEcSD6ei-HoYcafhIgV0u8";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const ApolloClient = new _ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  // defaultOptions: {
  //     watchQuery: {
  //         fetchPolicy: 'no-cache',
  //         errorPolicy: 'ignore'
  //     },
  //     query: {
  //         fetchPolicy: 'no-cache',
  //         errorPolicy: 'all'
  //     }
  // }
});

export default ApolloClient;
