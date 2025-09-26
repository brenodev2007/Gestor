import { Users } from '../generated/prisma';

export interface usersRepository {
  create(email: string, hashedPassword: string, name: string): Promise<Users>;

  findById(id: string): Promise<Users | null>;

  findAll(): Promise<Users[]>;

  findByEmail(email: string): Promise<Users | null>;

  update(id: string, email: string, password: string): Promise<Users>;

  delete(id: string): Promise<void>;
}
