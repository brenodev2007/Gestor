import { OperartionType, Operations } from '../generated/prisma';

export interface OperationDTO {
  description: string;
  amount: number;
  idUser: string;
  idWallet: string;
  idCategory: string;
  type: OperartionType;
}

export interface FiltersDTO {
  type: OperartionType;
  date: Date;
  description: string;
  amount: number;
  idCategory: string;
}

export interface operationsRepository {
  create(data: OperationDTO): Promise<Operations>;

  getOperationsByUser(idUser: string): Promise<Operations[]>;

  list(filters: Partial<FiltersDTO>): Promise<Operations[]>;

  deleteOperation(idOperation: string): Promise<void>;

  updateOperation(
    idOperation: string,
    data: Partial<OperationDTO>
  ): Promise<Operations>;
}
