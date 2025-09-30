import z from 'zod';
import { Role, Users } from '../../../generated/prisma';
import { AppError } from '../../../utils/AppError';
import bcrypt from 'bcrypt';
import { usersRepository } from '../../../repositories/usersRepository';

export class CreateUserService {
  constructor(private userRepo: usersRepository) {}

  async execute(
    email: string,
    password: string,
    name: string,
    role: Role
  ): Promise<Users> {
    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cria o usuário no banco
    return this.userRepo.create(email, hashedPassword, name, role);
  }
}
