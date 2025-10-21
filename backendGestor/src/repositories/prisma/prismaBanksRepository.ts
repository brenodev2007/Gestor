import { prisma } from '../../db/prisma';
import { Banks } from '../../generated/prisma';
import { banksDTO } from '../banksRepository';

export class prismaBanksRepostiory {
  async create(data: banksDTO): Promise<Banks> {
    const bank = await prisma.banks.create({
      data,
    });
    return bank;
  }

  async getAllBanks(): Promise<Banks[]> {
    const banks = await prisma.banks.findMany();
    return banks;
  }

  async delete(id: string): Promise<void> {
    const bank = await prisma.banks.delete({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: Partial<banksDTO>): Promise<Banks> {
    const bank = await prisma.banks.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return bank;
  }
}
