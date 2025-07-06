import { type LoaderFunctionArgs, redirect } from 'react-router';
import { destroySession, getSession } from '@/app/sessions.server.ts';

/**
 * This route handles user logout by destroying the session and redirecting to the login page.
 * It does not render any UI, as its sole purpose is to handle the logout logic.
 */
export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get('Cookie'));
  return redirect('/login', {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  });
};

export default function Logout() {
  return null; // This component doesn't need to render anything
}
