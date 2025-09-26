import { Request, Response } from 'express';
import { LoginController } from '../controllers/LoginController';
import { LoginService } from '../services/LoginService';
import { PrismaUserRepository } from '../../../repositories/prisma/prismaUserRepository';

export const loginFactory = async (req: Request, res: Response) => {
  try {
    const prismaUserRepository = new PrismaUserRepository();
    const Service = new LoginService(prismaUserRepository);
    const Controller = new LoginController(Service);

    await Controller.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 400).json(error);
  }
};
