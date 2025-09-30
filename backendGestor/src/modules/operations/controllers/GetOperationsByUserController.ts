import { Request, Response } from 'express';
import z, { email, ZodError } from 'zod';

import { GetOperationByUserService } from '../services/GetOperationByUserService';

export class GetOperationByUserController {
  constructor(private getOperationByUserService: GetOperationByUserService) {}

  async handle(req: Request, res: Response) {
    try {
      const paramsSchema = z.object({
        idUser: z.string().uuid(),
      });

      const { idUser } = paramsSchema.parse(req.params);

      const operations = await this.getOperationByUserService.execute(idUser);

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
