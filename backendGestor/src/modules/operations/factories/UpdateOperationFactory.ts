import { Request, Response } from 'express';
import { UpdateOperationController } from '../controllers/UpdateOperationController';
import { UpdateOperationService } from '../services/UpdateOperationService';
import { PrismaOperationRepository } from '../../../repositories/prisma/prismaOperationRepostiroy';

export const updateOperationFactory = async (req: Request, res: Response) => {
  try {
    const prismaOperationRepository = new PrismaOperationRepository();
    const Service = new UpdateOperationService(prismaOperationRepository);
    const Controller = new UpdateOperationController(Service);

    await Controller.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 400).json(error);
  }
};
