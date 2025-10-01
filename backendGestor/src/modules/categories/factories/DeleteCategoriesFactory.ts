import { Request, Response } from 'express';
import { DeleteCategoriesController } from '../controllers/DeleteCategoriesController';
import { DeleteCategoriesService } from '../services/DeleteCategoriesService';
import { PrismaCategoriesRepository } from '../../../repositories/prisma/prismaCategoriesRepository';

export const deleteCategoriesFactory = async (req: Request, res: Response) => {
  try {
    const prismaCategoryRepository = new PrismaCategoriesRepository();
    const Service = new DeleteCategoriesService(prismaCategoryRepository);
    const Controller = new DeleteCategoriesController(Service);

    await Controller.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 400).json(error);
  }
};
