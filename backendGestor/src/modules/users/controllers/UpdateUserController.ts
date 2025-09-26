import { Request, Response } from 'express';
import z, { email } from 'zod';
import { UpdateUserService } from '../services/UpdateUserService';

export class UpdateUserController {
  constructor(private updateUserController: UpdateUserService) {}

  async handle(req: Request, res: Response) {
    const userSchema = z.object({
      email: z.string().email({ message: 'Email inválido' }),
      password: z
        .string()
        .min(6, { message: 'Senha deve ter pelo menos 6 caracteres' }),
      id: z.string().uuid({ message: 'ID inválido' }),
    });

    const { id } = req.params;

    const { email, password } = userSchema.parse(req.body);

    const UpdatedUser = await this.updateUserController.execute(
      email,
      password,
      id
    );

    return res.json({ user: UpdatedUser });
  }
}
