import { Request, Response } from 'express';
import { CreateCategoriesController } from '../controllers/CreateCategoriesController';
import { CreateCategoriesService } from '../services/CreateCategoriesService';
import { PrismaCategoriesRepository } from '../../../repositories/prisma/prismaCategoriesRepository';

export const createCategoriesFactory = async (req: Request, res: Response) => {
  try {
    const prismaCategoryRepository = new PrismaCategoriesRepository();
    const Service = new CreateCategoriesService(prismaCategoryRepository);
    const Controller = new CreateCategoriesController(Service);

    await Controller.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 400).json(error);
  }
};
