import { Request, Response } from 'express';
import z, { email } from 'zod';
import { CreateReportService } from '../services/CreateReportsService';
import { GetReportsByUserService } from '../services/GetReportsByUserService';

export class GetReportsByUserController {
  constructor(private getReportsByUserService: GetReportsByUserService) {}

  async handle(req: Request, res: Response) {
    try {
      const reportSchema = z.object({
        idUser: z.string().uuid(),
      });

      const { idUser } = reportSchema.parse(req.params);

      const createdReport = await this.getReportsByUserService.execute(idUser);

      return res.json({ report: createdReport });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: 'Erro nos campos' });
      }
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  }
}
