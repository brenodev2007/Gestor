import { Request, Response } from 'express';
import { ListOperationController } from '../controllers/ListOperationController';
import { ListOperationService } from '../services/ListOperationService';
import { PrismaOperationRepository } from '../../../repositories/prisma/prismaOperationRepostiroy';

export const listOperationFactory = async (req: Request, res: Response) => {
  try {
    const prismaOperationRepository = new PrismaOperationRepository();
    const Service = new ListOperationService(prismaOperationRepository);
    const Controller = new ListOperationController(Service);

    await Controller.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 400).json(error);
  }
};
