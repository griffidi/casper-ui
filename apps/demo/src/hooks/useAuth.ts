import { getSession } from '../app/sessions.server.ts';
import type { AuthSession } from '../auth/auth-session.ts';

/**
 * This type defines the structure of the auth session data.
 */
export type Auth = {
  /**
   * The authentication token for the user.
   */
  token: string | null;
  /**
   * The username of the authenticated user.
   */
  username: string | null;
  /**
   * The user ID of the authenticated user.
   */
  userId: string | null;
  /**
   * Indicates whether the user is authenticated.
   */
  isAuthenticated: boolean;
};

/**
 * This hook is used to get the auth session from the request.
 * It returns the token and username from the session.
 *
 * @param {Request} request - The request object.
 * @returns {UseAuth} - The auth session data.
 */
export const useAuth = async (request: Request): Promise<Auth> => {
  const session = await getSession(request.headers.get('Cookie'));
  const userId = await session.get('userId')!;
  const { token = null, username = null } = userId ? (JSON.parse(userId) as AuthSession) : {};
  return { token, username, userId, isAuthenticated: !!token } as const;
};
