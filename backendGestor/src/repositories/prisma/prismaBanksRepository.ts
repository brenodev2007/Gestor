import { prisma } from '../../db/prisma';
import { Banks } from '../../generated/prisma';
import { banksDTO } from '../banksRepository';

export class PrismaBanksRepository {
  async create(data: banksDTO): Promise<Banks> {
    return await prisma.banks.create({
      data: {
        name: data.name,
        logoUrl: data.logoUrl || '', // default if undefined
        idWallet: data.idWallet,
      },
    });
  }

  async getAllBanks(): Promise<Banks[]> {
    return await prisma.banks.findMany();
  }

  async finbyId(id: string): Promise<Banks | null> {
    return await prisma.banks.findUnique({ where: { id } });
  }

  async update(id: string, data: Partial<banksDTO>): Promise<Banks> {
    return await prisma.banks.update({
      where: { id },
      data: {
        ...data,
        logoUrl: data.logoUrl || '',
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.banks.delete({ where: { id } });
  }
}
