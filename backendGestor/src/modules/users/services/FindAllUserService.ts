import z from 'zod';
import { Users } from '../../../generated/prisma';
import { AppError } from '../../../utils/AppError';
import bcrypt from 'bcrypt';
import { usersRepository } from '../../../repositories/usersRepository';

export class FindAllUserService {
  constructor(private userRepo: usersRepository) {}

  async execute(): Promise<Users[]> {
    // busca o usuário no banco pelo id
    const user = await this.userRepo.findAll();

    if (!user) {
      throw new AppError('Usuário não encontrado', 404);
    }

    return user;
  }
}
