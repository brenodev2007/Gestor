import { Request, Response } from 'express';
import { FindbyIdUserController } from '../controllers/FindByIdUserController';
import { FindByIdUserService } from '../services/FindByIdUserService';
import { PrismaUserRepository } from '../../../repositories/prisma/prismaUserRepository';
import { FindAllUserService } from '../services/FindAllUserService';
import { FindAllUserController } from '../controllers/FindAllUserController';

export const findAllUserFactory = async (req: Request, res: Response) => {
  try {
    const prismaUserRepository = new PrismaUserRepository();
    const Service = new FindAllUserService(prismaUserRepository);
    const Controller = new FindAllUserController(Service);

    await Controller.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 400).json(error);
  }
};
