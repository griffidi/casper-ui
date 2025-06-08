import { index, type RouteConfig, route } from '@react-router/dev/routes';

export default [
  index('routes/index.tsx'),
  // route('settings', 'routes/settings.tsx'),
  route('login', 'routes/auth/login.tsx'),
  // ...prefix('users', [
  //   index('routes/users/index.tsx'),
  //   route(':id', 'routes/users/[id].tsx'),
  // ]),
  // ...prefix('customers', [
  //   index('routes/customers/index.tsx'),
  //   route(':id', 'routes/customers/[id].tsx'),
  // ]),
] satisfies RouteConfig;
