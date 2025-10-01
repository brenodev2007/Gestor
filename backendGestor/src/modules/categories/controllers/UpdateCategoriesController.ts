import { Request, Response } from 'express';
import z, { ZodError } from 'zod';

import { UpdateCategoriesServices } from '../services/UpdateCategoriesService';

export class UpdateCategoriesController {
  constructor(private updateCategoriesService: UpdateCategoriesServices) {}

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      // validação dos campos que podem ser atualizados
      const bodySchema = z.object({
        name: z.string(),
        userId: z.string().uuid(),
        type: z.enum(['V', 'F']),
        color: z.string().nullable().optional(),
        icon: z.string().nullable().optional(),
      });

      const data = bodySchema.parse(req.body);

      const category = await this.updateCategoriesService.execute(data, id);

      return res.json({ category: category });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: 'Erro nos campos enviados',
          error: error.issues,
        });
      }
      console.error(error);
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }
}
