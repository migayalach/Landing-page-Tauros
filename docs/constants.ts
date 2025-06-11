export const URL_SERVER_DEPLOY = process.env.NEXT_PUBLIC_SERVER_DEPLOY;
export const URL_SERVER_LOCAL = process.env.NEXT_PUBLIC_SERVER_LOCAL;

export const URL_SERVER =
  process.env.NEXT_PUBLIC_DEV === "production"
    ? URL_SERVER_DEPLOY
    : URL_SERVER_LOCAL;
