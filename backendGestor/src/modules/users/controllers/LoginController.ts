import { Request, Response } from 'express';
import z, { email } from 'zod';

import { LoginService } from '../services/LoginService';

export class LoginController {
  constructor(private loginService: LoginService) {}

  async handle(req: Request, res: Response) {
    try {
      const loginSchema = z.object({
        email: z.string().email({ message: 'Email inválido' }),
        password: z
          .string()
          .min(6, { message: 'Senha deve ter pelo menos 6 caracteres' }),
      });

      const { email, password } = loginSchema.parse(req.body);

      const loginResponse = await this.loginService.execute(email, password);

      return res.json(loginResponse);
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
