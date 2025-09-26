import z from 'zod';
import { Users } from '../../../generated/prisma';
import { AppError } from '../../../utils/AppError';
import bcrypt from 'bcrypt';
import { usersRepository } from '../../../repositories/usersRepository';

export class UpdateUserService {
  constructor(private userRepo: usersRepository) {}

  async execute(email: string, password: string, id: string): Promise<Users> {
    // atualiza o usuário no banco

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    return this.userRepo.update(email, hashedPassword, id);
  }
}
