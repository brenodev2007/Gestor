import { Request, Response } from 'express';
import { DeleteUserController } from '../controllers/DeleteUserController';
import { DeleteUserService } from '../services/DeleteUserService';
import { PrismaUserRepository } from '../../../repositories/prisma/prismaUserRepository';

export const Factory = async (req: Request, res: Response) => {
  try {
    const prismaUserRepository = new PrismaUserRepository();
    const Service = new DeleteUserService(prismaUserRepository);
    const Controller = new DeleteUserController(Service);

    await Controller.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 400).json(error);
  }
};
