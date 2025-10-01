import { prisma } from '../../db/prisma';
import { Reports } from '../../generated/prisma';
import { reportsDTO, reportsRepository } from '../reportsRepository';

export class PrismaReportRepository implements reportsRepository {
  async createReport(data: {
    id: string;
    idUser: string;
    month: number;
    income: number;
    expenses: number;
  }): Promise<Reports> {
    const reports = await prisma.reports.create({
      data: {
        idUser: data.idUser,
        month: data.month,
        income: data.income,
        expenses: data.expenses,
      },
    });
    return reports;
  }
  async getReportsByUser(userId: string): Promise<Reports[]> {
    const reports = await prisma.reports.findMany({
      where: {
        idUser: userId,
      },
    });
    return reports;
  }
  async getReportByMonth(
    userId: string,
    month: number
  ): Promise<Reports | null> {
    const report = await prisma.reports.findFirst({
      where: {
        idUser: userId,
        month: month,
      },
    });
    return report;
  }

  async list(filters: Partial<reportsDTO>): Promise<Reports[]> {
    const reports = await prisma.reports.findMany({
      where: {
        ...filters,
      },
    });

    return reports;
  }
}
