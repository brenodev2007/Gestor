import { OperartionType, Operations } from '../generated/prisma';

export interface operationsRepository {
  create(
    description: string,
    amount: number,
    idUser: string,
    idWallet: string,
    idCategory: string,
    type: OperartionType
  ): Promise<Operations>;
  getOperationsByUser(idUser: string): Promise<Operations[]>;

  deleteOperation(idOperation: string): Promise<void>;

  updateOperation(
    idOperation: string,
    description: string,
    amount: number,
    idUser: string,
    idWallet: string,
    idCategory: string,
    type: OperartionType
  ): Promise<Operations>;
}
