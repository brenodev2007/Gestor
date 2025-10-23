import { AppError } from '../../../utils/AppError';
import type { PrismaBanksRepository } from '../../../repositories/prisma/prismaBanksRepository';

export class DeleteBanksService {
  constructor(private banksRepository: PrismaBanksRepository) {}

  async execute(id: string): Promise<void> {
    if (!id) {
      throw new AppError('Bank ID is required', 400);
    }

    const bank = await this.banksRepository.finbyId(id);
    if (!bank) {
      throw new AppError('Bank not found', 404);
    }

    await this.banksRepository.delete(id);
  }
}
