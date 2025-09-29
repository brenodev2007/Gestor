import { Operations } from '../generated/prisma';

export interface operationsRepository {
  create(
    description: string,
    amount: number,
    date: Date,
    idUser: string,
    type: 'income' | 'expense'
  ): Promise<Operations>;
  getOperationsByUser(idUser: string): Promise<Operations[]>;

  deleteOperation(idOperation: string): Promise<void>;

  updateOperation(
    idOperation: string,
    description: string,
    amount: number,
    date: Date,
    type: 'income' | 'expense'
  ): Promise<Operations>;
}
