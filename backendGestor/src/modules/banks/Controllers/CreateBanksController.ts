import { Request, Response } from 'express';
import z from 'zod';
import { CreateBanksService } from '../Services/CreateBanksService';
import { AppError } from '../../../utils/AppError';

export class CreateBanksController {
  constructor(private createBanksService: CreateBanksService) {}

  async handle(req: Request, res: Response) {
    try {
      const bankSchema = z.object({
        name: z.string().min(1, { message: 'Nome é obrigatório' }),
        logoUrl: z.string().url({ message: 'URL inválida' }).optional(),
        idWallet: z.string().optional(),
      });

      const data = bankSchema.parse(req.body);

      const createdBank = await this.createBanksService.execute(data);

      return res.status(201).json({ bank: createdBank });
    } catch (error: any) {
      console.error(error);

      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: 'Dados inválidos',
          errors: error.issues,
        });
      }

      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}
