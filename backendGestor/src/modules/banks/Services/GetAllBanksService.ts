import { Banks } from '../../../generated/prisma';
import { PrismaBanksRepository } from '../../../repositories/prisma/prismaBanksRepository';

export class GetAllBanksService {
  constructor(private bankRepo: PrismaBanksRepository) {}

  async execute(): Promise<Banks[]> {
    return await this.bankRepo.getAllBanks();
  }
}
