import { Reports } from '../generated/prisma';

export interface reportsRepository {
  createReport(data: {
    idUser: string;
    month: number;
    income: number;
    expenses: number;
  }): Promise<Reports>;
  getReportsByUser(userId: string): Promise<Reports[]>;
  getReportByMonth(userId: string, month: number): Promise<Reports | null>;
}
