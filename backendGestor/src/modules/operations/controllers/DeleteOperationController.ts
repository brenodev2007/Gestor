import { Request, Response } from 'express';
import z, { email, ZodError } from 'zod';

import { DeleteOperationService } from '../services/DeleteOperationService';

export class DeleteOperationController {
  constructor(private deleteOperation: DeleteOperationService) {}

  async handle(req: Request, res: Response) {
    try {
      const paramsSchema = z.object({
        idOperation: z.string().uuid(),
      });

      const { idOperation } = paramsSchema.parse(req.params);

      const operations = await this.deleteOperation.execute(idOperation);

      return res.json({ operations });
    } catch (error) {
      if (error instanceof ZodError) {
        res.json({ message: 'Erro nos campos enviados', error: error.issues });
      } else {
        return res.status(500).json({ error: 'Erro interno no servidor' });
      }
    }
  }
}
