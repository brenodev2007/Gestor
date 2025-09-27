import { Reports } from '../../../generated/prisma';
import { reportsRepository } from '../../../repositories/reportsRepository';

export class CreateReportService {
  constructor(private reportsRepo: reportsRepository) {}

  async execute(
    idUser: string,
    month: number,
    income: number,
    expenses: number
  ): Promise<Reports> {
    const data = { idUser, month, income, expenses };

    const reports = await this.reportsRepo.createReport(data);

    return reports;
  }
}
