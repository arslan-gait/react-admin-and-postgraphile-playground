import React, { useEffect, useState } from 'react'
import { ApolloProvider } from '@apollo/react-hooks';
import { Admin, Resource } from 'react-admin'
import { useApolloClient } from '@apollo/react-hooks'
import { authProvider } from './authProvider';
import { PartnerList, ContactEdit, ContactCreate, PartnerEdit } from './Partner'
import ApolloClient from './Apollo';
// import { buildQuery } from './buildQuery';
import { dataProvider } from './dataProvider';

// import buildGraphQLProvider, { buildQuery } from 'ra-data-graphql-simple';

// const myBuildQuery = introspection => (fetchType, resource, params) => {
//   const builtQuery = buildQuery(introspection)(fetchType, resource, params);

//   if (resource === 'Partner' && fetchType === 'GET_LIST') {
//     return {
//       // Use the default query variables and parseResponse
//       ...builtQuery,
//       // Override the query
//       query: `
//                 query partners($id: ID!) {
//                   partners(id: $id) {
//                     createdAt
//                     id
//                     jwkUrl
//                     jwtAud
//                     jwtIss
//                     loginName
//                     status
//                   }
//                 }`,
//     };
//   }

//   return builtQuery;
// };

const App = () => {
  // const [dataProvider, setDataProvider] = useState(null);
  // const client = useApolloClient();

  // useEffect(() => {
  //     (async () => {
  //         const dataProvider = await pgDataProvider(client);
  //         setDataProvider(() => dataProvider);
  //     })()
  // }, [client]);

  // useEffect(() => {
  //   ; (async () => {
  //     const dataProvider = await pgDataProvider(client)
  //     setDataProvider(() => dataProvider)
  //   })()
  // }, [client])


  // React.useEffect(() => {
  //   buildGraphQLProvider({ client: client, buildQuery: buildQuery })
  //     .then(graphQlDataProvider => setDataProvider(() => graphQlDataProvider));
  // }, []);

  if (!dataProvider) {
    return <div>Loading </div>;
  }

  //   dataProvider.getList('posts', {
  //     pagination: { page: 1, perPage: 5 },
  //     sort: { field: 'title', order: 'ASC' },
  //     filter: { author_id: 12 },
  // })
  // .then(response => console.log("response from app:", response))
  

  return (
    dataProvider && (
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource
          name="Partner"
          list={PartnerList}
        edit={PartnerEdit}
        // create={ContactCreate}
        />
      </Admin>
    )
  );
}

// const App = () => {
//   return (
//     <ApolloProvider client={ApolloClient}>
//       <ReactAdminWrapper />
//     </ApolloProvider>
//   );
// }

export default App;