import { Request, Response } from 'express';
import z, { email, ZodError } from 'zod';

import { CreateCategoriesService } from '../services/CreateCategoriesService';

export class CreateCategoriesController {
  constructor(private createCategoriesService: CreateCategoriesService) {}

  async handle(req: Request, res: Response) {
    try {
      const CategorySchema = z.object({
        id: z.string().uuid(),
        name: z.string(),
        userId: z.string().uuid(),
        type: z.enum(['V', 'F']),
        color: z.string().nullable(),
        icon: z.string().nullable(),
      });

      const data = CategorySchema.parse(req.body);

      const createdReport = await this.createCategoriesService.execute(data);

      return res.json({ report: createdReport });
    } catch (error) {
      if (error instanceof ZodError) {
        res.json({ message: 'Erro nos campos enviados', error: error.issues });
      } else {
        return res.status(500).json({ error: 'Erro interno no servidor' });
      }
    }
  }
}
