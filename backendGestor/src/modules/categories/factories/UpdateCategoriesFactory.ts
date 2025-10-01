import { Request, Response } from 'express';
import { UpdateCategoriesController } from '../controllers/UpdateCategoriesController';
import { UpdateCategoriesServices } from '../services/UpdateCategoriesService';
import { PrismaCategoriesRepository } from '../../../repositories/prisma/prismaCategoriesRepository';

export const Factory = async (req: Request, res: Response) => {
  try {
    const prismaCategoryRepository = new PrismaCategoriesRepository();
    const Service = new UpdateCategoriesServices(prismaCategoryRepository);
    const Controller = new UpdateCategoriesController(Service);

    await Controller.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 400).json(error);
  }
};
