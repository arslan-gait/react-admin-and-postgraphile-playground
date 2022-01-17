export const httpClient = () => {
  const { token } = JSON.parse(localStorage.getItem('auth')) || {};
  return { Authorization: `Bearer ${token}` };
};

export const authProvider = {
  // authentication
  login: ({ username, password }) => {
    console.log("Login fired");
    const request = new Request(
      'http://localhost:5000/graphql',
      {
        method: 'POST',
        body: {
          query: `
            mutation MyMutation {
              loginPartner(input: {loginName: "kattegat", masterKey: "m-secret"}) {
                jwt
              }
            }`,
          variables: null,
          operationName: "MyMutation",
        },
        headers: new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}),
      }
    );
    return fetch(request)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
        console.log(response.text)
        return response.json();
      })
      .then((auth) => {
        console.log('auth data: ', auth);
        localStorage.setItem(
          'auth',
          JSON.stringify({ ...auth, fullName: username })
        );
      })
      .catch((err) => {
        console.log(err)
        throw new Error('Network error');
      });
  },
  checkError: error => Promise.resolve(),
  checkAuth: params => Promise.resolve(),
  logout: () => Promise.resolve(),
  getIdentity: () => Promise.resolve(),
  // authorization
  getPermissions: params => Promise.resolve(),
};
