import { Request, Response } from 'express';
import z from 'zod';
import { GetReportsByMonthService } from '../services/GetReportsByMonthService';

export class GetReportsByMonthController {
  constructor(private getReportsByMonhtService: GetReportsByMonthService) {}

  async handle(req: Request, res: Response) {
    const reportSchema = z.object({
      idUser: z.string().uuid(),
      month: z.string(),
    });

    const { idUser } = reportSchema.parse(req.params);

    const { month } = reportSchema.parse(req.body);

    const createdReport = await this.getReportsByMonhtService.execute(
      idUser,
      month
    );

    return res.json({ report: createdReport });
  }
}
