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
    return prisma.reports.create({
      data,
    });
  }

  async getReportsByUser(idUser: string): Promise<Reports[]> {
    return prisma.reports.findMany({ where: { idUser } });
  }

  async getReportByMonth(
    idUser: string,
    month: number
  ): Promise<Reports | null> {
    return prisma.reports.findFirst({ where: { idUser, month } });
  }

  async list(filters: Partial<reportsDTO>): Promise<Reports[]> {
    // filtrar apenas os campos definidos
    const where: any = {};
    Object.keys(filters).forEach((key) => {
      const value = (filters as any)[key];
      if (value !== undefined) where[key] = value;
    });
    return prisma.reports.findMany({ where });
  }
}
