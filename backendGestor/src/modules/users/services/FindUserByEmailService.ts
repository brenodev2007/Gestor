import z from 'zod';
import { Users } from '../../../generated/prisma';
import { AppError } from '../../../utils/AppError';
import bcrypt from 'bcrypt';
import { usersRepository } from '../../../repositories/usersRepository';

export class FindUserByEmailService {
  constructor(private userRepo: usersRepository) {}

  async execute(email: string): Promise<Users> {
    const user = await this.userRepo.findByEmail(email);

    if (!user) {
      throw new AppError('Usuário não encontrado', 404);
    }

    return user;
  }
}
