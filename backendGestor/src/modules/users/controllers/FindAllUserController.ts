import { Request, Response } from 'express';
import z from 'zod';

import { FindAllUserService } from '../services/FindAllUserService';

export class FindAllUserController {
  constructor(private findAllUserService: FindAllUserService) {}

  async handle(req: Request, res: Response) {
    try {
      const user = await this.findAllUserService.execute();

      return res.json({ users: user });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: 'Erro nos campos' });
      }
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }
}
