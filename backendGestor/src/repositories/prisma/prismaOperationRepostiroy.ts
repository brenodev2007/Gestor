import { prisma } from '../../db/prisma';
import { OperartionType, Operations } from '../../generated/prisma';
import {
  FiltersDTO,
  OperationDTO,
  operationsRepository,
} from '../operationsRepository';

export class PrismaOperationRepository implements operationsRepository {
  async list(filters: FiltersDTO): Promise<Operations[]> {
    const operations = await prisma.operations.findMany({
      where: {
        ...filters,
      },
    });

    return operations;
  }
  async create(data: OperationDTO): Promise<Operations> {
    const operation = await prisma.operations.create({
      data,
    });
    return operation;
  }
  async getOperationsByUser(idUser: string): Promise<Operations[]> {
    const operations = await prisma.operations.findMany({
      where: {
        idUser,
      },
    });
    return operations;
  }
  async deleteOperation(idOperation: string): Promise<void> {
    const operation = await prisma.operations.delete({
      where: {
        id: idOperation,
      },
    });
  }
  async updateOperation(
    idOperation: string,
    data: Partial<OperationDTO>
  ): Promise<Operations> {
    const operation = await prisma.operations.update({
      where: {
        id: idOperation,
      },
      data: {
        ...data,
      },
    });
    return operation;
  }
}
