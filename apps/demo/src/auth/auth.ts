import { clientConfig, createApolloClient } from '@/client/create-apollo-client.ts';
import { Signin, Signout } from '@/types/graphql';

/**
 * Signs the user in by calling the Signin GraphQL query.
 *
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<string | null>} - Returns a promise that resolves to the token if successful, or null if not.
 */
export const signin = async (username: string, password: string) => {
  const client = createApolloClient(clientConfig);
  const { data } = await client.query({
    query: Signin,
    variables: {
      username,
      password,
    },
    fetchPolicy: 'no-cache',
  });
  const { token, userId } = data.signin || {};

  return { token, userId };
};

/**
 * Signs the user out by calling the Signout GraphQL query.
 *
 * @returns {boolean} - Returns true if the signout was successful, false otherwise.
 */
export const signout = async () => {
  const client = createApolloClient(clientConfig);
  const { data } = await client.query({ query: Signout, fetchPolicy: 'no-cache' });
  const { signout } = data;

  if (signout) {
    localStorage.removeItem('token');
  }

  return signout;
};

/**
 * Validates if the user is authenticated by checking for a token in localStorage.
 *
 * @returns {boolean} - Returns true if a token exists, false otherwise.
 */
export const validate = () => {
  const token = localStorage.getItem('token');
  return !!token;
};
