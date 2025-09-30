import { Request, Response } from 'express';
import { GetOperationByUserController } from '../controllers/GetOperationsByUserController';
import { GetOperationByUserService } from '../services/GetOperationByUserService';
import { PrismaOperationRepository } from '../../../repositories/prisma/prismaOperationRepostiroy';

export const getOperationsByUserFactory = async (
  req: Request,
  res: Response
) => {
  try {
    const prismaOperationRepository = new PrismaOperationRepository();
    const Service = new GetOperationByUserService(prismaOperationRepository);
    const Controller = new GetOperationByUserController(Service);

    await Controller.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 400).json(error);
  }
};
