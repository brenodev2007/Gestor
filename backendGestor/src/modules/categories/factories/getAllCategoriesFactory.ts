import { Request, Response } from 'express';
import { GetAllCategoriesController } from '../controllers/getAllCategoriesController';
import { GetAllCategoriesService } from '../services/getAllCategoriesService';
import { PrismaCategoriesRepository } from '../../../repositories/prisma/prismaCategoriesRepository';

export const getAllCategoriesFactory = async (req: Request, res: Response) => {
  try {
    const prismaCategoryRepository = new PrismaCategoriesRepository();
    const Service = new GetAllCategoriesService(prismaCategoryRepository);
    const Controller = new GetAllCategoriesController(Service);

    await Controller.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 400).json(error);
  }
};
