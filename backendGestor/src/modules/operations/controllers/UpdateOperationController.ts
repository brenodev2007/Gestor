import { Request, Response } from 'express';
import z, { ZodError } from 'zod';
import { UpdateOperationService } from '../services/UpdateOperationService';

export class UpdateOperationController {
  constructor(private updateOperationService: UpdateOperationService) {}

  async handle(req: Request, res: Response) {
    try {
      // id vem dos params
      const { idOperation } = req.params;

      // validação dos campos que podem ser atualizados
      const bodySchema = z.object({
        description: z.string().min(3).max(255),
        amount: z.number().min(0.01),
        idUser: z.string().uuid(),
        idWallet: z.string().uuid(),
        idCategory: z.string().uuid(),
        type: z.enum(['I', 'E']),
      });

      const data = bodySchema.parse(req.body);

      const updatedOperation = await this.updateOperationService.execute(
        data,
        idOperation
      );

      return res.json({ operation: updatedOperation });
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
