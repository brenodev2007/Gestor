import { Request, Response } from 'express';
import { DeleteOperationController } from '../controllers/DeleteOperationController';
import { DeleteOperationService } from '../services/DeleteOperationService';
import { PrismaOperationRepository } from '../../../repositories/prisma/prismaOperationRepostiroy';

export const deleteOperationFactory = async (req: Request, res: Response) => {
  try {
    const prismaOperationRepository = new PrismaOperationRepository();
    const Service = new DeleteOperationService(prismaOperationRepository);
    const Controller = new DeleteOperationController(Service);

    await Controller.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 400).json(error);
  }
};
