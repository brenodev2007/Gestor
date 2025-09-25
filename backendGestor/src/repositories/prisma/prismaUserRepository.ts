import { prisma } from "../../db/prisma";
import { Users } from "../../generated/prisma";
import { usersRepository } from "../usersRepository";

export class PrismaUserRepository implements usersRepository {
  async create(email: string, password: string): Promise<Users> {
    return prisma.users.create({
      data: {
        email,
        password,
      },
    });
  }
  findById(id: string): Promise<Users | null> {
    const user = prisma.users.findUnique({
      where: {
        id,
      },
    });
    return user;
  }
  findByEmail(email: string): Promise<Users | null> {
    const user = prisma.users.findUnique({
      where: {
        email,
      },
    });
    return user;
  }
  update(id: string, email: string, password: string): Promise<Users> {
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
  delete(id: string): Promise<void> {
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
