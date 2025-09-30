import { Request, Response } from 'express';
import z, { ZodError } from 'zod';
import { UpdateOperationService } from '../services/UpdateOperationService';
import { ListOperationService } from '../services/ListOperationService';

export class ListOperationController {
  constructor(private listOperationService: ListOperationService) {}

  async handle(req: Request, res: Response) {
    try {
      const querySchema = z.object({
        description: z.string().optional(),
        amount: z.coerce.number().optional(),
        idWallet: z.string().uuid().optional(),
        idCategory: z.string().uuid().optional(),
        type: z.enum(['I', 'E']).optional(),
      });
      const data = querySchema.parse(req.query);

      const operationsFiltred = await this.listOperationService.execute(data);

      return res.json({ operations: operationsFiltred });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: 'Erro nos campos enviados',
          error: error.issues,
        });
      }
      console.error(error);
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }
}
