import { Request, Response } from 'express';
import { CreateReportsController } from '../controllers/CreateReportsController';
import { CreateReportService } from '../services/CreateReportsService';
import { PrismaReportRepository } from '../../../repositories/prisma/prismaReportRepository';

export const createReportsFactory = async (req: Request, res: Response) => {
  try {
    const prismaReportRepository = new PrismaReportRepository();

    const Service = new CreateReportService(prismaReportRepository);
    const Controller = new CreateReportsController(Service);

    await Controller.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 400).json(error);
  }
};
