import { Request, Response } from 'express';
import z, { email } from 'zod';

import { DeleteUserService } from '../services/DeleteUserService';
import { id } from 'zod/v4/locales';

export class DeleteUserController {
  constructor(private deleteUserService: DeleteUserService) {}

  async handle(req: Request, res: Response) {
    try {
      const userSchema = z.object({
        id: z.string().uuid({ message: 'ID inválido' }),
      });

      const { id } = userSchema.parse(req.params);

      const createdUSer = await this.deleteUserService.execute(id);

      return res.json({ user: createdUSer });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: 'Erro nos campos' });
      }
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  }
}
