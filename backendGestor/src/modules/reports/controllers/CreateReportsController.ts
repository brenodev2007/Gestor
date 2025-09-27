import { Request, Response } from 'express';
import z, { email } from 'zod';
import { CreateReportService } from '../services/CreateReportsService';

export class CreateReportsController {
  constructor(private createReportService: CreateReportService) {}

  async handle(req: Request, res: Response) {
    const reportSchema = z.object({
      id: z.string().uuid(),
      idUser: z.string().uuid(),
      month: z.string().min(7).max(7),
      income: z.number().min(0),
      expenses: z.number().min(0),
    });

    const { id, idUser, month, income, expenses } = reportSchema.parse(
      req.body
    );

    const createdReport = await this.createReportService.execute(
      id,
      idUser,
      month,
      income,
      expenses
    );

    return res.json({ report: createdReport });
  }
}
