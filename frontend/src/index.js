import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './ServiceWorker';

import { ApolloProvider } from "@apollo/client";
import client from './Apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
