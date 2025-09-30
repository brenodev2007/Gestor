import { Request, Response } from 'express';
import z, { email } from 'zod';
import { CreateUserService } from '../services/CreateUserService';

export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  async handle(req: Request, res: Response) {
    try {
      const userSchema = z.object({
        email: z.string().email({ message: 'Email inválido' }),
        password: z
          .string()
          .min(6, { message: 'Senha deve ter pelo menos 6 caracteres' }),
        name: z
          .string()
          .min(2, { message: 'Nome deve ter pelo menos 2 caracteres' }),
        role: z.enum(['FREE', 'PRO']).default('FREE'),
      });

      const { email, password, name, role } = userSchema.parse(req.body);

      const createdUSer = await this.createUserService.execute(
        email,
        password,
        name,
        role
      );

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
