import { Request, Response } from 'express';
import { PrismaUserRepository } from '../../../repositories/prisma/prismaUserRepository';
import { CreateUserController } from '../controllers/CreateUserController';
import { CreateUserService } from '../services/CreateUserService';

export const createUserFactory = async (req: Request, res: Response) => {
  try {
    const prismaUserRepository = new PrismaUserRepository();

    const createUserService = new CreateUserService(prismaUserRepository);
    const createUserController = new CreateUserController(createUserService);

    await createUserController.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 400).json(error);
  }
};
