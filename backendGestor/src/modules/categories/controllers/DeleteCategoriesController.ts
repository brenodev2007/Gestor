import { Request, Response } from 'express';
import z, { email, ZodError } from 'zod';

import { DeleteCategoriesService } from '../services/DeleteCategoriesService';

export class DeleteCategoriesController {
  constructor(private deleteCategories: DeleteCategoriesService) {}

  async handle(req: Request, res: Response) {
    try {
      const paramsSchema = z.object({
        id: z.string().uuid(),
        userId: z.string().uuid(),
      });

      const { id, userId } = paramsSchema.parse(req.params);

      await this.deleteCategories.execute(userId, id);

      return res.json({ message: 'Categoria deletada com sucesso' });
    } catch (error) {
      if (error instanceof ZodError) {
        res.json({ message: 'Erro nos campos enviados', error: error.issues });
      } else {
        return res.status(500).json({ error: 'Erro interno no servidor' });
      }
    }
  }
}
