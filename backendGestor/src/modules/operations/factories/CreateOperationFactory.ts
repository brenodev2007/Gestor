import { Request, Response } from 'express';
import { CreateOperationController } from '../controllers/CreateOperationController';
import { CreateOperationService } from '../services/CreateOperationService';
import { PrismaOperationRepository } from '../../../repositories/prisma/prismaOperationRepostiroy';

export const createOperationFactory = async (req: Request, res: Response) => {
  try {
    const prismaOperationRepository = new PrismaOperationRepository();
    const Service = new CreateOperationService(prismaOperationRepository);
    const Controller = new CreateOperationController(Service);

    await Controller.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 400).json(error);
  }
};
