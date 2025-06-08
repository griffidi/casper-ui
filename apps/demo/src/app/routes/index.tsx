import { makeStyles } from '@griffel/react';
import { type LoaderFunctionArgs, redirect } from 'react-router';
import { useAuth } from '@/hooks/useAuth.ts';
import type { Route } from './+types';

const useStyles = makeStyles({
  homeContainer: {
    display: 'grid',
    placeItems: 'center',
    height: '100%',

    '> span': {
      fontSize: '7rem',
      fontWeight: 700,
      transition: 'transform 1s ease-in-out',

      // '&:hover': {
      //   transform: 'scale(2)',
      //   transition: 'transform 0.3s ease-in-out',
      // },
    },
  },
});

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { isAuthenticated } = await useAuth(request);

  if (!isAuthenticated) {
    const params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);
    return redirect('/login?' + params.toString());
  }

  return { isAuthenticated };
};

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
};

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.homeContainer}>
      <span className="brand-text-color">ghost UI</span>
    </div>
  );
}
