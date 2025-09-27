import { Request, Response } from 'express';
import { z } from 'zod';
import { CreateUserService } from '../services/CreateUserService';
import { FindByIdUserService } from '../services/FindByIdUserService';

export class FindbyIdUserController {
  constructor(private findByidUserService: FindByIdUserService) {}

  async handle(req: Request, res: Response) {
    try {
      const userSchema = z.object({
        id: z.string().uuid({ message: 'ID inválido' }),
      });

      const { id } = userSchema.parse(req.params);

      const user = await this.findByidUserService.execute(id);

      return res.json({ user: user });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: 'Erro nos campos' });
      }
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }
}
