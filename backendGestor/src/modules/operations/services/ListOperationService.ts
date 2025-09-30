import z from 'zod';
import { OperartionType, Operations, Users } from '../../../generated/prisma';
import { AppError } from '../../../utils/AppError';

import {
  OperationDTO,
  operationsRepository,
} from '../../../repositories/operationsRepository';

export class ListOperationService {
  constructor(private opeRepo: operationsRepository) {}

  async execute(filters: Partial<OperationDTO>): Promise<Operations[]> {
    // Cria a operação no banco

    return this.opeRepo.list(filters);
  }
}
