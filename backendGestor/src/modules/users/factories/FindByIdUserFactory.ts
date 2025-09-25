import { Request, Response } from 'express';
import { FindbyIdUserController } from '../controllers/FindByIdUserController';
import { FindByIdUserService } from '../services/FindByIdUserService';
import { PrismaUserRepository } from '../../../repositories/prisma/prismaUserRepository';

export const findByIdUserFactory = async (req: Request, res: Response) => {
  try {
    const prismaUserRepository = new PrismaUserRepository();
    const Service = new FindByIdUserService(prismaUserRepository);
    const Controller = new FindbyIdUserController(Service);

    await Controller.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 400).json(error);
  }
};
