import { Request, Response } from 'express';
import z from 'zod';
import { GetReportsByMonthService } from '../services/GetReportsByMonthService';

export class GetReportsByMonthController {
  constructor(private getReportsByMonthService: GetReportsByMonthService) {}

  async handle(req: Request, res: Response) {
    try {
      // Schema para params
      const paramsSchema = z.object({
        idUser: z.string().uuid(),
      });

      // Schema para body
      const bodySchema = z.object({
        month: z.string().min(1, 'Mês é obrigatório'),
      });

      const { idUser } = paramsSchema.parse(req.params);
      const { month } = bodySchema.parse(req.body);

      const createdReport = await this.getReportsByMonthService.execute(
        idUser,
        month
      );

      return res.json({ report: createdReport });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: 'Erro nos campos' });
      }
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }
}
