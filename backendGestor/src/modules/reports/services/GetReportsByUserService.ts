import { Reports, Users } from '../../../generated/prisma';
import { AppError } from '../../../utils/AppError';

import { reportsRepository } from '../../../repositories/reportsRepository';

export class GetReportsByUserService {
  constructor(private reportRepo: reportsRepository) {}

  async execute(idUser: string): Promise<Reports[]> {
    const report = await this.reportRepo.getReportsByUser(idUser);

    if (!report) {
      throw new AppError('Relatório não encontrado', 404);
    }

    return report;
  }
}
