// import buildFieldList from './buildFieldList';

// import gql from "graphql-tag";

// export const buildQuery = introspectionResults => (raFetchType, resourceName, params) => {
//   // console.log(introspectionResults)
//   console.log("resporce", introspectionResults);
//   console.log(raFetchType);
//   const resource = introspectionResults.resources.find(r => r.type.name === resourceName);

//   switch (raFetchType) {
//     case 'GET_LIST':
//       return {
//         // query: gql`query MyQuery {\n  data: {partners {\n    createdAt\n    id\n    jwkUrl\n    jwtAud\n    jwtIss\n    loginName\n    status\n  }\n}}`,
//         query: `
//         query partners {
//           partners {
//             loginName
//           }
//         }`,
//         variables: null, // params = { id: ... }
//         parseResponse: response => response.data,
//       }
//     default:
//       break;
//     // ... other types handled here
//   }
// }

import { gql, useQuery } from '@apollo/client';
import ApolloClient from './Apollo';

const GET_PARTNERS = gql`
  query GetPartners {
    partners {
      id
      jwkUrl
      jwtAud
      jwtIss
      loginName
      status
      createdAt
    }
  }
`;

export const GetPartners = () => {
  return ApolloClient.query({query: GET_PARTNERS})
}
