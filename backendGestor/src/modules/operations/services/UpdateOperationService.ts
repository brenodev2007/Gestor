import z from 'zod';
import { OperartionType, Operations, Users } from '../../../generated/prisma';
import { AppError } from '../../../utils/AppError';

import {
  OperationDTO,
  operationsRepository,
} from '../../../repositories/operationsRepository';

export class UpdateOperationService {
  constructor(private opeRepo: operationsRepository) {}

  async execute(data: OperationDTO, idOperation: string): Promise<Operations> {
    // Cria a operação no banco

    return this.opeRepo.updateOperation(idOperation, data);
  }
}
