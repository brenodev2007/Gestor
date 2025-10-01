import { Request, Response } from 'express';
import z from 'zod';
import { GetReportsByMonthService } from '../services/GetReportsByMonthService';

export class GetReportsByMonthController {
  constructor(private getReportsByMonthService: GetReportsByMonthService) {}

  async handle(req: Request, res: Response) {
    try {
      // Pegar month de query
      const querySchema = z.object({
        month: z
          .string()
          .transform((val) => parseInt(val, 10))
          .refine((val) => !isNaN(val) && val >= 1 && val <= 12, {
            message: 'Mês inválido',
          }),
      });

      const { month } = querySchema.parse(req.query);

      const idUser = req.user?.id;
      console.log(idUser);

      if (!idUser) {
        return res.status(401).json({ error: 'Usuário não autenticado' });
      }

      const report = await this.getReportsByMonthService.execute(idUser, month);

      return res.json({ report });
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
