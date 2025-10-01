import { Request, Response } from 'express';
import z, { email, ZodError } from 'zod';
import { CreateReportService } from '../services/CreateReportsService';

export class CreateReportsController {
  constructor(private createReportService: CreateReportService) {}

  async handle(req: Request, res: Response) {
    try {
      const reportSchema = z.object({
        idUser: z.string().uuid(),
        month: z.number().int().min(1).max(12),
        income: z.number().min(0),
        expenses: z.number().min(0),
      });

      const { idUser, month, income, expenses } = reportSchema.parse(req.body);

      const createdReport = await this.createReportService.execute(
        idUser,
        month,
        income,
        expenses
      );

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
