import { prisma } from '../../db/prisma';
import { Role, Users } from '../../generated/prisma';
import { usersRepository } from '../usersRepository';

export class PrismaUserRepository implements usersRepository {
  async create(
    email: string,
    password: string,
    name: string,
    role: Role
  ): Promise<Users> {
    return prisma.users.create({
      data: {
        email,
        password,
        name,
        role,
      },
    });
  }
  async findById(id: string): Promise<Users | null> {
    const user = prisma.users.findUnique({
      where: {
        id,
      },
    });
    return user;
  }
  async findByEmail(email: string): Promise<Users | null> {
    const user = await prisma.users.findUnique({
      where: { email },
    });
    return user;
  }
  async findAll(): Promise<Users[]> {
    const users = prisma.users.findMany();
    return users;
  }

  async update(id: string, email: string, password: string): Promise<Users> {
    const user = prisma.users.update({
      where: {
        id,
      },
      data: {
        email,
        password,
      },
    });
    return user;
  }
  async delete(id: string): Promise<void> {
    const user = prisma.users.delete({
      where: {
        id,
      },
    });
    return user.then(() => {
      return;
    });
  }
}
