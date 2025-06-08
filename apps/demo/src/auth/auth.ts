import { clientConfig, createApolloClient } from '@/client/create-apollo-client.ts';
import { Signin } from '@/types/graphql';

export const signin = async (username: string, password: string) => {
  const client = createApolloClient(clientConfig);

  const {
    data: { signin: token = null },
  } = await client.query({
    query: Signin,
    variables: {
      username,
      password,
    },
    fetchPolicy: 'no-cache',
  });

  return token;
};

export const signOut = () => {
  // Perform sign-out logic here
  console.log('signOut');
  return true;
};

export const validate = () => {
  // Check if the user is authenticated
  const token = localStorage.getItem('token');
  return !!token;
};
