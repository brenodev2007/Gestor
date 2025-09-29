import { prisma } from '../../db/prisma';
import { operationsRepository } from '../operationsRepository';

export class PrismaOperationRepository implements operationsRepository {
  async createOperation(data: {
    id: string;
    idUser: string;
    type: 'income' | 'expense';
    value: number;
    date: Date;
  }): Promise<any> {
    const operation = await prisma.operations.create({
      data: {
        idUser: data.idUser,
        type: data.type,
        value: data.value,
        date: data.date,
      },
    });
    return operation;
  }

  async getOperationsByUser(userId: string): Promise<any[]> {
    const operations = await prisma.operations.findMany({
      where: {
        idUser: userId,
      },
    });
    return operations;
  }

  async getOperationById(id: string): Promise<any | null> {
    const operation = await prisma.operations.findUnique({
      where: {
        id,
      },
    });
    return operation;
  }

  async updateOperation(
    id: string,
    data: { type?: string; value?: number; date?: Date }
  ): Promise<any> {
    const operation = await prisma.operations.update({
      where: {
        id,
      },
      data: {
        type: data.type,
        value: data.value,
        date: data.date,
      },
    });
    return operation;
  }

  async deleteOperation(id: string): Promise<void> {
    await prisma.operations.delete({
      where: {
        id,
      },
    });
  }
}
