import { Request, Response } from 'express';
import z, { email } from 'zod';

import { DeleteUserService } from '../services/DeleteUserService';
import { id } from 'zod/v4/locales';

export class DeleteUserController {
  constructor(private deleteUserService: DeleteUserService) {}

  async handle(req: Request, res: Response) {
    const userSchema = z.object({
      id: z.string().uuid({ message: 'ID inválido' }),
    });

    const { id } = userSchema.parse(req.body);

    const createdUSer = await this.deleteUserService.execute(id);

    return res.json({ user: createdUSer });
  }
}
