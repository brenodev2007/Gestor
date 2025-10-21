import { Request, Response } from 'express';
import { CreateBanksController } from '../Controllers/CreateBanksController';
import { CreateBanksService } from '../Services/CreateBanksService';
import { PrismaBanksRepository } from '../../../repositories/prisma/prismaBanksRepository';

export const createBanksFactory = async (req: Request, res: Response) => {
  try {
    const repo = new PrismaBanksRepository();
    const service = new CreateBanksService(repo);
    const controller = new CreateBanksController(service);

    await controller.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 500).json({
      message: error?.message || 'Erro desconhecido',
    });
  }
};
