import { Request, Response } from 'express';
import { FindbyIdUserController } from '../controllers/FindByIdUserController';
import { FindByIdUserService } from '../services/FindByIdUserService';
import { PrismaUserRepository } from '../../../repositories/prisma/prismaUserRepository';
import { FindUserByEmailService } from '../services/FindUserByEmailService';
import { FindUserByEmailController } from '../controllers/FindUserByEmailController';

export const findUserByEmailFactory = async (req: Request, res: Response) => {
  try {
    const prismaUserRepository = new PrismaUserRepository();
    const Service = new FindUserByEmailService(prismaUserRepository);
    const Controller = new FindUserByEmailController(Service);

    await Controller.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 400).json(error);
  }
};
