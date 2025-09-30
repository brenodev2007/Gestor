import { Request, Response } from 'express';
import z, { ZodError } from 'zod';

import { ListReportsService } from '../services/ListReportsService';

export class ListReportsController {
  constructor(private listReportsService: ListReportsService) {}

  async handle(req: Request, res: Response) {
    try {
      const querySchema = z.object({
        id: z.string().uuid().optional(),

        month: z.number().int().min(1).max(12).optional(),
        description: z.string().optional(),
        amount: z.number().optional(),
        income: z.number().optional(),
        expenses: z.number().optional(),
        createdAt: z.date().optional(),
        updatedAt: z.date().optional(),
      });
      const data = querySchema.parse(req.query);

      const reportsFiltred = await this.listReportsService.execute(data);

      return res.json({ reports: reportsFiltred });
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
