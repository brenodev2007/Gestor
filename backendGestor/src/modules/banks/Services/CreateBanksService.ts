import { Banks } from '../../../generated/prisma';
import { banksDTO } from '../../../repositories/banksRepository';

import { PrismaBanksRepository } from '../../../repositories/prisma/prismaBanksRepository';

export class CreateBanksService {
  constructor(private bankRepo: PrismaBanksRepository) {}

  async execute(data: banksDTO): Promise<Banks> {
    return await this.bankRepo.create(data);
  }
}
