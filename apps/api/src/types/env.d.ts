declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      ACCESS_TOKEN_SECRET: string;
      CORS_ORIGIN: string;
      PORT: number;
    }
  }
}

export {};
