import { prisma } from '../../db/prisma';
import { Reports } from '../../generated/prisma';
import { reportsRepository } from '../reportsRepository';

export class PrismaReportRepositor implements reportsRepository {
  createReport(data: {
    id: string;
    idUser: string;
    month: number;
    income: number;
    expenses: number;
  }): Promise<Reports> {
    const reports = prisma.reports.create({
      data: {
        idUser: data.idUser,
        month: String(data.month),
        income: data.income,
        expenses: data.expenses,
      },
    });
    return reports;
  }
  getReportsByUser(userId: string): Promise<Reports[]> {
    const reports = prisma.reports.findMany({
      where: {
        idUser: userId,
      },
    });
    return reports;
  }
  getReportByMonth(userId: string, month: number): Promise<Reports | null> {
    const report = prisma.reports.findFirst({
      where: {
        idUser: userId,
        month: String(month),
      },
    });
    return report;
  }
}
