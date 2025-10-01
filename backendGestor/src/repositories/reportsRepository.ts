import { Reports } from '../generated/prisma';

export interface reportsDTO {
  id: string;
  idUser: string;
  month: number;
  income: number;
  expenses: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface reportsRepository {
  createReport(data: {
    idUser: string;
    month: number;
    income: number;
    expenses: number;
  }): Promise<Reports>;

  getReportsByUser(idUser: string): Promise<Reports[]>;

  getReportByMonth(idUser: string, month: number): Promise<Reports | null>;

  list(filters: Partial<reportsDTO>): Promise<Reports[]>;
}
