import { Request, Response } from 'express';
import { GetReportsByUserController } from '../controllers/GetReportsByUserController';
import { GetReportsByUserService } from '../services/GetReportsByUserService';
import { PrismaReportRepositor } from '../../../repositories/prisma/prismaReportRepository';

export const GetReportsByUserFactory = async (req: Request, res: Response) => {
  try {
    const prismaReportRepository = new PrismaReportRepositor();
    const Service = new GetReportsByUserService(prismaReportRepository);
    const Controller = new GetReportsByUserController(Service);

    await Controller.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 400).json(error);
  }
};
