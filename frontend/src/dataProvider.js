// import buildGraphQLProvider, { buildQuery } from 'ra-data-graphql-simple';

import { GetPartners } from "./buildQuery";

// const myBuildQuery = introspection => (fetchType, resource, params) => {
//     const builtQuery = buildQuery(introspection)(fetchType, resource, params);

//     if (resource === 'partners' && fetchType === 'GET_LIST') {
//         return {
//             // Use the default query variables and parseResponse
//             ...builtQuery,
//             // Override the query
//             query: `
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
//         };
//     }

//     return builtQuery;
// };

// export default buildGraphQLProvider({ buildQuery: myBuildQuery });


export const dataProvider = {
  getList: async (resource, params) => {
    // return 
    // console.log(partners)
    const a = await GetPartners()
    return new Promise((resolve, reject) => {
      // try {
        // let partners = async () => {
      let res = {
        data: a.data.partners,
        total: a.data.partners.length
      }
          // return res
        // }
      
      // let res = {
      //   data: await GetPartners(),
      //   total: 1
      // }
      console.log("returned res:", res)
      resolve(res)
      // } catch (e) {
      //   console.log("error:", e)
      //   reject(e)
      // };
    });
  },
  getOne: (resource, params) => Promise,
  getMany: (resource, params) => Promise,
  getManyReference: (resource, params) => Promise,
  create: (resource, params) => Promise,
  update: async (resource, params) => {
    // return 
    // console.log(partners)
    const a = await GetPartners()
    return new Promise((resolve, reject) => {
      // try {
        // let partners = async () => {
      let res = {
        data: a.data.partners,
        total: a.data.partners.length
      }
          // return res
        // }
      
      // let res = {
      //   data: await GetPartners(),
      //   total: 1
      // }
      console.log("returned res:", res)
      resolve(res)
      // } catch (e) {
      //   console.log("error:", e)
      //   reject(e)
      // };
    });
  },
  updateMany: (resource, params) => Promise,
  delete: (resource, params) => Promise,
  deleteMany: (resource, params) => Promise,
}
