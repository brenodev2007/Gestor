import z from 'zod';
import { Users } from '../../../generated/prisma';
import { AppError } from '../../../utils/AppError';
import bcrypt from 'bcrypt';
import { usersRepository } from '../../../repositories/usersRepository';

export class DeleteUserService {
  constructor(private userRepo: usersRepository) {}

  async execute(id: string): Promise<void> {
    // Cria o usuário no banco
    const user = await this.userRepo.delete(id);

    return user;
  }
}
