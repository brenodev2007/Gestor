import { prisma } from '../../db/prisma';
import { OperartionType, Operations } from '../../generated/prisma';
import { OperationDTO, operationsRepository } from '../operationsRepository';

export class PrismaOperationRepository implements operationsRepository {
  create(data: OperationDTO): Promise<Operations> {
    const operation = prisma.operations.create({
      data,
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
    data: Partial<OperationDTO>
  ): Promise<Operations> {
    const operation = prisma.operations.update({
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
