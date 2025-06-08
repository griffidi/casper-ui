import { createContext } from 'react';

export const AuthContext = createContext<{
  username: string | null;
  isAuthenticated: boolean;
} | null>(null);

export const AuthProvider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;
