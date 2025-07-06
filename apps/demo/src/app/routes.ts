import { index, prefix, type RouteConfig, route } from '@react-router/dev/routes';

export default [
  index('routes/index.tsx'),
  route('login', 'routes/auth/login.tsx'),
  route('logout', 'routes/auth/logout.tsx'),
  ...prefix('users', [
    index('routes/users/index.tsx'),
    route(':id', 'routes/users/[id]/index.tsx'),
    route(':id/settings', 'routes/users/[id]/settings.tsx'),
  ]),
  ...prefix('customers', [
    index('routes/customers/index.tsx'),
    route(':id', 'routes/customers/[id].tsx'),
  ]),
] satisfies RouteConfig;
