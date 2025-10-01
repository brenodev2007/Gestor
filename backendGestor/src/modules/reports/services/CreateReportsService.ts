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
    return this.reportsRepo.createReport({ idUser, month, income, expenses });
  }
}
