import { Request, Response } from 'express';
import z, { email } from 'zod';
import { CreateUserService } from '../services/userService';

export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  async handle(req: Request, res: Response) {
    const userSchema = z.object({
      email: z.string().email({ message: 'Email inválido' }),
      password: z
        .string()
        .min(6, { message: 'Senha deve ter pelo menos 6 caracteres' }),
    });

    const { email, password } = userSchema.parse(req.body);

    const createdUSer = await this.createUserService.execute(email, password);

    return res.json({ user: createdUSer });
  }
}
