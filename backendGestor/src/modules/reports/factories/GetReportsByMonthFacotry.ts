import { Request, Response } from 'express';
import { GetReportsByMonthController } from '../controllers/GetReportsByMonthController';
import { GetReportsByMonthService } from '../services/GetReportsByMonthService';
import { PrismaReportRepositor } from '../../../repositories/prisma/prismaReportRepositor';

export const GetReportsByMonthFactory = async (req: Request, res: Response) => {
  try {
    const prismaReportRepository = new PrismaReportRepositor();
    const Service = new GetReportsByMonthService(prismaReportRepository);
    const Controller = new GetReportsByMonthController(Service);

    await Controller.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 400).json(error);
  }
};
