import { createContext } from 'react';

export type AuthContextType = {
  userId: string | null;
  username: string | null;
  isAuthenticated: boolean;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
export const AuthProvider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;
