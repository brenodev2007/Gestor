import { Request, Response } from 'express';
import { GetAllBanksController } from '../Controllers/GetAllBanksController';
import { GetAllBanksService } from '../Services/GetAllBanksService';
import { PrismaBanksRepository } from '../../../repositories/prisma/prismaBanksRepository';

export const getAllBanksFactory = async (req: Request, res: Response) => {
  try {
    const repo = new PrismaBanksRepository();
    const service = new GetAllBanksService(repo);
    const controller = new GetAllBanksController(service);

    await controller.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 500).json({
      message: error?.message || 'Erro desconhecido',
    });
  }
};
