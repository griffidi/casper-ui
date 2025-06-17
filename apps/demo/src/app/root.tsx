import { ApolloProvider } from '@apollo/client/react/context';
import componentStyles from '@cui/components/index.css?url';
import { createDOMRenderer, RendererProvider } from '@griffel/react';
import { StrictMode, Suspense } from 'react';
import {
  isRouteErrorResponse,
  Links,
  type LoaderFunctionArgs,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'react-router';
import { AuthProvider } from '@/auth/auth-context.tsx';
import { clientConfig, createApolloClient } from '@/client/create-apollo-client.ts';
import Loading from '@/components/loading/loading.tsx';
import { useAuth } from '@/hooks/useAuth.ts';
import Footer from '@/layout/footer';
import Header from '@/layout/header';
import styles from '@/styles/styles.css?url';
import type { Route } from './+types/root';
import appStyles from './app.css?url';

export const links: Route.LinksFunction = () => [
  {
    rel: 'icon',
    type: 'image/svg+xml',
    href: 'ghost.svg',
  },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
  {
    rel: 'stylesheet',
    href: appStyles,
  },
  {
    rel: 'stylesheet',
    href: styles,
  },
  {
    rel: 'stylesheet',
    href: componentStyles,
  },
];

const client = createApolloClient(clientConfig);

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { isAuthenticated, username } = await useAuth(request);
  return { isAuthenticated, username };
};

export function Layout({ children }: { children: React.ReactElement | React.ReactElement[] }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark light" />
        <Meta />
        <Links />
      </head>
      <body>
        <StrictMode>
          <ApolloProvider client={client}>{children}</ApolloProvider>
        </StrictMode>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const auth = useLoaderData<typeof loader>() || {};

  return (
    <RendererProvider renderer={createDOMRenderer()}>
      <AuthProvider value={auth}>
        {auth.isAuthenticated && <Header />}
        <main>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </AuthProvider>
    </RendererProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404 ? 'The requested page could not be found.' : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
