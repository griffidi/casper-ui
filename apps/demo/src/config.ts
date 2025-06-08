const config = {
  github: import.meta.env.VITE_GITHUB_URL,
  linkedin: import.meta.env.VITE_LINKEDIN_URL,
} as const;

export default config;
export type Config = typeof config;
