import { Request, Response } from 'express';
import z from 'zod';
import { GetAllCategoriesService } from '../services/getAllCategoriesService';

export class GetAllCategoriesController {
  constructor(private getAllCategoriesService: GetAllCategoriesService) {}

  async handle(req: Request, res: Response) {
    try {
      const categories = await this.getAllCategoriesService.execute();

      return res.json({ category: categories });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: 'Erro nos campos' });
      }
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }
}
