import { prisma } from '../../db/prisma';
import { Reports } from '../../generated/prisma';

import { reportsDTO, reportsRepository } from '../reportsRepository';

export class PrismaReportRepository implements reportsRepository {
  async createReport(data: {
    idUser: string;
    month: number;
    income: number;
    expenses: number;
  }): Promise<Reports> {
    const report = await prisma.reports.create({
      data: {
        idUser: data.idUser,
        month: data.month,
        income: data.income,
        expenses: data.expenses,
      },
    });
    return report;
  }

  async getReportsByUser(idUser: string): Promise<Reports[]> {
    return prisma.reports.findMany({
      where: { idUser },
    });
  }

  async getReportByMonth(
    idUser: string,
    month: number
  ): Promise<Reports | null> {
    return prisma.reports.findFirst({
      where: {
        idUser,
        month,
      },
    });
  }

  async list(filters: Partial<reportsDTO>): Promise<Reports[]> {
    return prisma.reports.findMany({
      where: { ...filters },
    });
  }
}
