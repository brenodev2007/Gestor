import { AppError } from '../../../utils/AppError';
import type { PrismaBanksRepository } from '../../../repositories/prisma/prismaBanksRepository';
import { banksDTO } from '../../../repositories/banksRepository';
import { Banks } from '../../../generated/prisma';

export class UpdateBanksService {
  constructor(private banksRepository: PrismaBanksRepository) {}

  async execute(id: string, data: Partial<banksDTO>): Promise<Banks> {
    if (!id) {
      throw new AppError('Bank ID is required', 400);
    }

    const bankExists = await this.banksRepository.finbyId(id);
    if (!bankExists) {
      throw new AppError('Bank not found', 404);
    }

    const updatedBank = await this.banksRepository.update(id, data);
    return updatedBank;
  }
}
