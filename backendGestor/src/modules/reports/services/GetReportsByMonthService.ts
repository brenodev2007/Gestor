import { Reports, Users } from '../../../generated/prisma';
import { AppError } from '../../../utils/AppError';

import { reportsRepository } from '../../../repositories/reportsRepository';

export class GetReportsByMonthService {
  constructor(private reportRepo: reportsRepository) {}

  async execute(month: string, UserId: string): Promise<Reports> {
    const report = await this.reportRepo.getReportByMonth(month, UserId);

    if (!report) {
      throw new AppError('Relatório não encontrado', 404);
    }

    return report;
  }
}
