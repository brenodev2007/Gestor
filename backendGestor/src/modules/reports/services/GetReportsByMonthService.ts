import { Reports } from '../../../generated/prisma';
import { AppError } from '../../../utils/AppError';
import { reportsRepository } from '../../../repositories/reportsRepository';

export class GetReportsByMonthService {
  constructor(private reportRepo: reportsRepository) {}

  async execute(idUser: string, month: number): Promise<Reports> {
    const report = await this.reportRepo.getReportByMonth(idUser, month);

    if (!report) {
      throw new AppError('Relatório não encontrado', 404);
    }

    return report ?? null;
  }
}
