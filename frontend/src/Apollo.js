import { ApolloClient as _ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: 'http://localhost:5000/graphql'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = process.env.REACT_APP_JWT_TOKEN
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
