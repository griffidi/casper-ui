import Button from '@cui/components/button/button.tsx';
import { makeStyles } from '@griffel/react';
import { useFormStatus } from 'react-dom';
import { redirect } from 'react-router';
import { commitSession, getSession } from '@/app/sessions.server.ts';
import { signin } from '@/auth/auth.ts';
import { useAuth } from '@/hooks/useAuth.ts';
import type { Route } from './+types/login.ts';
import styles from './login.css.ts';

const useStyles = makeStyles(styles);

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
  const token = await signin(username, password);

  const session = await getSession(request.headers.get('Cookie'));

  if (!token) {
    session.flash('error', 'Invalid username/password');

    // Redirect back to the login page with errors.
    return redirect('/login', {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    });
  }

  session.set(
    'userId',
    JSON.stringify({
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

const Actions = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      Login
    </Button>
  );
};

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <form method="post" className={classes.form}>
        <header>
          <span className="brand-text-color">Login</span>
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
  );
}
