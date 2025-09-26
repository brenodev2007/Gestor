import { Request, Response } from 'express';
import z from 'zod';

import { FindAllUserService } from '../services/FindAllUserService';

export class FindAllUserController {
  constructor(private findAllUserService: FindAllUserService) {}

  async handle(req: Request, res: Response) {
    const user = await this.findAllUserService.execute();

    return res.json({ users: user });
  }
}
