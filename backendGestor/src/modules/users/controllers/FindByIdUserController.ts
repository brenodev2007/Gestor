import { Request, Response } from 'express';
import { z } from 'zod';
import { CreateUserService } from '../services/CreateUserService';
import { FindByIdUserService } from '../services/FindByIdUserService';

export class FindbyIdUserController {
  constructor(private findByidUserService: FindByIdUserService) {}

  async handle(req: Request, res: Response) {
    const userSchema = z.object({
      id: z.string().uuid({ message: 'ID inválido' }),
    });

    const { id } = userSchema.parse(req.params);

    const user = await this.findByidUserService.execute(id);

    return res.json({ user: user });
  }
}
