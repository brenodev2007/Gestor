import z from 'zod';
import { OperartionType, Operations, Users } from '../../../generated/prisma';
import { AppError } from '../../../utils/AppError';

import { operationsRepository } from '../../../repositories/operationsRepository';

export class CreateOperationService {
  constructor(private opeRepo: operationsRepository) {}

  async execute(
    description: string,
    amount: number,
    idUser: string,
    idWallet: string,
    idCategory: string,
    type: OperartionType
  ): Promise<Operations> {
    // Cria a operação no banco

    return this.opeRepo.create(
      description,
      amount,
      idUser,
      idWallet,
      idCategory,
      type
    );
  }
}
