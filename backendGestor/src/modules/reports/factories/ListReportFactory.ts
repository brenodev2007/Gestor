import { Request, Response } from 'express';
import { ListReportsController } from '../controllers/ListReportsController';
import { ListReportsService } from '../services/ListReportsService';
import { PrismaReportRepository } from '../../../repositories/prisma/prismaReportRepository';

export const listReportFactory = async (req: Request, res: Response) => {
  try {
    const prismaReportRepository = new PrismaReportRepository();
    const Service = new ListReportsService(prismaReportRepository);
    const Controller = new ListReportsController(Service);

    await Controller.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 400).json(error);
  }
};
