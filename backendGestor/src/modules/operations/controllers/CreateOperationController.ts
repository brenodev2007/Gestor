import { Request, Response } from 'express';
import z, { email, ZodError } from 'zod';

import { CreateOperationService } from '../services/CreateOperationService';

export class CreateOperationController {
  constructor(private createOperationService: CreateOperationService) {}

  async handle(req: Request, res: Response) {
    try {
      const reportSchema = z.object({
        description: z.string().min(3).max(255),
        amount: z.number().min(0.01),
        idUser: z.string().uuid(),
        idWallet: z.string().uuid(),
        idCategory: z.string().uuid(),
        type: z.enum(['I', 'E']),
      });

      const data = reportSchema.parse(req.body);

      const createdReport = await this.createOperationService.execute(data);

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
