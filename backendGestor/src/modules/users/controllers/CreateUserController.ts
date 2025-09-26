import { Request, Response } from 'express';
import z, { email } from 'zod';
import { CreateUserService } from '../services/CreateUserService';

export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  async handle(req: Request, res: Response) {
    const userSchema = z.object({
      email: z.string().email({ message: 'Email inválido' }),
      password: z
        .string()
        .min(6, { message: 'Senha deve ter pelo menos 6 caracteres' }),
      name: z
        .string()
        .min(2, { message: 'Nome deve ter pelo menos 2 caracteres' }),
    });

    const { email, password, name } = userSchema.parse(req.body);

    const createdUSer = await this.createUserService.execute(
      email,
      password,
      name
    );

    return res.json({ user: createdUSer });
  }
}
