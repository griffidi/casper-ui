import OutlineButton from '@cui/components/button/outline-button.tsx';
import { makeStyles } from '@griffel/react';
import { useFormStatus } from 'react-dom';
import { redirect } from 'react-router';
import type { Route } from '@/+types/index.ts';
import { commitSession, getSession } from '@/app/sessions.server.ts';
import { signin } from '@/auth/auth.ts';
import GhostSolidIcon from '@/components/icons/ghost-solid.tsx';
import { useAuth } from '@/hooks/useAuth.ts';
import styles from './login.css.ts';

const useStyles = makeStyles(styles);

/**
 * Loader function to check if the user is authenticated.
 * If authenticated, redirect to the home page. Otherwise,
 * return the isAuthenticated state.
 */
export async function loader({ request }: Route.LoaderArgs) {
  const { isAuthenticated } = await useAuth(request);

  if (isAuthenticated) {
    return redirect('/');
  }

  return { isAuthenticated };
}

export async function action({ request }: Route.ActionArgs) {
  const form = await request.formData();
  const username = form.get('username')?.toString()!;
  const password = form.get('password')?.toString()!;
  const { token, userId } = await signin(username, password);
  const session = await getSession(request.headers.get('Cookie'));

  // If the token is not valid, flash an error message and redirect back to the login page.
  // This is a simple example, in a real application you would want to handle this more gracefully,
  // such as showing a message on the login page.
  if (!token) {
    session.flash('error', 'Invalid username/password');

    // Redirect back to the login page with errors.
    return redirect('/login', {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    });
  }

  // Store the user information in the session.
  session.set(
    'userId',
    JSON.stringify({
      userId,
      username,
      token,
    }),
  );

  // Login succeeded, send them to the home page.
  return redirect('/', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
}

/**
 * Actions component for the login form.
 * It uses the `useFormStatus` hook to determine if the form is pending submission,
 * and disables the button accordingly.
 */
const Actions = () => {
  const { pending } = useFormStatus();

  return (
    <OutlineButton type="submit" disabled={pending}>
      Login
    </OutlineButton>
  );
};

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <GhostSolidIcon size={366} className={classes.icon} />
      </div>
      <div>
        <form method="post" className={classes.form}>
          <header>
            <span className={classes.title}>Login</span>
          </header>
          <div>
            <input
              type="text"
              name="username"
              autoComplete="username"
              placeholder="Enter your username"
              required
              className={classes.input}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              required
              className={classes.input}
            />
          </div>
          <footer className={classes.actions}>
            <Actions />
          </footer>
        </form>
      </div>
    </div>
  );
}
