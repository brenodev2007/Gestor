import z from 'zod';
import { OperartionType, Operations, Users } from '../../../generated/prisma';
import { AppError } from '../../../utils/AppError';

import { operationsRepository } from '../../../repositories/operationsRepository';

export class GetOperationByUserService {
  constructor(private opeRepo: operationsRepository) {}

  async execute(idUser: string): Promise<Operations[]> {
    return this.opeRepo.getOperationsByUser(idUser);
  }
}
