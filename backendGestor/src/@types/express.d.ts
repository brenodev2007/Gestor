declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        role: 'FREE' | 'PRO';
      };
    }
  }
}

export default global;
