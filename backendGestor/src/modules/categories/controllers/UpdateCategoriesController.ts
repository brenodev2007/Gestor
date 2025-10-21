import { Request, Response } from 'express';
import z, { ZodError } from 'zod';

import { UpdateCategoriesServices } from '../services/UpdateCategoriesService';
import { AppError } from '../../../utils/AppError';

export class UpdateCategoriesController {
  constructor(private updateCategoriesService: UpdateCategoriesServices) {}

  async handle(req: Request, res: Response) {
    console.log('[Controller] Incoming PATCH request', {
      params: req.params,
      body: req.body,
    });
    try {
      const { id } = req.params;

      // validação dos campos que podem ser atualizados
      const bodySchema = z.object({
        name: z.string(),
        type: z.enum(['V', 'F']),
        color: z.string().nullable().optional(),
        icon: z.string().nullable().optional(),
      });

      const data = bodySchema.parse(req.body);
      console.log('[Controller] Body parsed successfully', data);

      const category = await this.updateCategoriesService.execute(data, id);
      console.log('[Controller] Update successful', category);

      return res.json({ category: category });
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('[Controller] Zod validation error', error.issues);
        return res.status(400).json({
          message: 'Erro nos campos enviados',
          error: error.issues,
        });
      }

      if (error instanceof AppError) {
        console.log('[Controller] AppError caught', error.message);
        return res.status(error.statusCode).json({ message: error.message });
      }
      console.error('[Controller] Unexpected error', error);
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }
}
