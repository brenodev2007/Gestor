import { Request, Response } from 'express';
import z from 'zod';
import { GetReportsByMonthService } from '../services/GetReportsByMonthService';

export class GetReportsByMonthController {
  constructor(private getReportsByMonthService: GetReportsByMonthService) {}

  async handle(req: Request, res: Response) {
    try {
      const bodySchema = z.object({
        month: z.number().min(1, 'Mês é obrigatório'),
      });

      const { month } = bodySchema.parse(req.body);

      const idUser = req.user?.id;

      if (!idUser) {
        return res.status(401).json({ error: 'Usuário não autenticado' });
      }

      const createdReport = await this.getReportsByMonthService.execute(
        idUser,
        month
      );

      return res.json({ report: createdReport });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res
          .status(400)
          .json({ message: 'Erro nos campos enviados', error: error.issues });
      }
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }
}
