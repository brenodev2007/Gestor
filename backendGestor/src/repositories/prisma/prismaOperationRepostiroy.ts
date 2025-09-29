import { prisma } from '../../db/prisma';
import { OperartionType, Operations } from '../../generated/prisma';
import { operationsRepository } from '../operationsRepository';

export class PrismaOperationRepository implements operationsRepository {
  create(
    description: string,
    amount: number,
    idUser: string,
    idWallet: string,
    idCategory: string,
    type: OperartionType
  ): Promise<Operations> {
    const operation = prisma.operations.create({
      data: {
        description,
        amount,
        idUser,
        idWallet,
        idCategory,
        type,
      },
    });
    return operation;
  }
  getOperationsByUser(idUser: string): Promise<Operations[]> {
    const operations = prisma.operations.findMany({
      where: {
        idUser,
      },
    });
    return operations;
  }
  deleteOperation(idOperation: string): Promise<void> {
    const operation = prisma.operations.delete({
      where: {
        id: idOperation,
      },
    });
    return operation.then(() => {
      return;
    });
  }
  updateOperation(
    idOperation: string,
    description: string,
    amount: number,
    idUser: string,
    idWallet: string,
    idCategory: string,
    type: OperartionType
  ): Promise<Operations> {
    const operation = prisma.operations.update({
      where: {
        id: idOperation,
      },
      data: {
        description,
        amount,
        idUser,
        idWallet,
        idCategory,
        type,
      },
    });
    return operation;
  }
}
