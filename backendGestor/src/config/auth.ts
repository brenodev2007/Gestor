interface AuthConfig {
  jwt: {
    secret: string;
    expiresIn: string | number;
  };
}

export const authConfig = {
  jwt: {
    secret: process.env.JWT_SECRET || 'secreto',
    expiresIn: '1d',
  },
};
