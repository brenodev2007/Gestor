import { Request, Response } from 'express';
import { FindbyIdUserController } from '../controllers/FindByIdUserController';
import { FindByIdUserService } from '../services/FindByIdUserService';
import { PrismaUserRepository } from '../../../repositories/prisma/prismaUserRepository';
import { FindUserByEmailService } from '../services/FindUserByEmailService';
import { FindUserByEmailController } from '../controllers/FindUserByEmailController';
import { UpdateUserService } from '../services/UpdateUserService';
import { UpdateUserController } from '../controllers/UpdateUserController';

export const updateUserFactory = async (req: Request, res: Response) => {
  try {
    const prismaUserRepository = new PrismaUserRepository();
    const Service = new UpdateUserService(prismaUserRepository);
    const Controller = new UpdateUserController(Service);

    await Controller.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 400).json(error);
  }
};
