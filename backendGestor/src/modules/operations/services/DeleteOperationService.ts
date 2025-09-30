import { operationsRepository } from '../../../repositories/operationsRepository';

export class DeleteOperationService {
  constructor(private opeRepo: operationsRepository) {}

  async execute(idUser: string): Promise<void> {
    return this.opeRepo.deleteOperation(idUser);
  }
}
