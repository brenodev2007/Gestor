import { Request, Response } from 'express';
import z from 'zod';
import { FindUserByEmailService } from '../services/FindUserByEmailService';

export class FindUserByEmailController {
  constructor(private findUserByEmailService: FindUserByEmailService) {}

  async handle(req: Request, res: Response) {
    try {
      const userSchema = z.object({
        email: z.string().email({ message: 'Email inválido' }),
      });

      const { email } = userSchema.parse(req.body);

      const user = await this.findUserByEmailService.execute(email);

      return res.json({ user: user });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: 'Erro nos campos' });
      }
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }
}
