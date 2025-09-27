import { Request, Response } from 'express';
import z from 'zod';
import { FindUserByEmailService } from '../services/FindUserByEmailService';

export class FindUserByEmailController {
  constructor(private findUserByEmailService: FindUserByEmailService) {}

  async handle(req: Request, res: Response) {
    try {
      const querySchema = z.object({
        email: z.string().email({ message: 'Email inválido' }),
      });

      const { email } = querySchema.parse(req.query);

      const user = await this.findUserByEmailService.execute(email);

      return res.json({ user });
    } catch (error: any) {
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }
}
