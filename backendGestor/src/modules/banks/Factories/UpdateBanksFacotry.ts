import type {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';
import { PrismaBanksRepository } from '../../../repositories/prisma/prismaBanksRepository';
import { UpdateBanksService } from '../Services/UpdateBanksService';
import { UpdateBanksController } from '../Controllers/UpdateBanksController';

export const updateBanksFactory = async (
  req: ExpressRequest,
  res: ExpressResponse
) => {
  try {
    const prismaBanksRepository = new PrismaBanksRepository();
    const updateBanksService = new UpdateBanksService(prismaBanksRepository);
    const updateBanksController = new UpdateBanksController(updateBanksService);

    await updateBanksController.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 500).json({
      message: error?.message || 'Unexpected server error',
    });
  }
};
