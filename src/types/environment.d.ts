export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      POSTGRE_HOST: string;
      POSTGRES_PORT: string;
      POSTGRES_USERNAME: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_DATABASE_NAME: string;
    }
  }
}
