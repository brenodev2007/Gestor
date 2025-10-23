import type {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';
import { PrismaBanksRepository } from '../../../repositories/prisma/prismaBanksRepository';
import { DeleteBanksService } from '../Services/DeleteBanksService';
import { DeleteBanksController } from '../Controllers/DeleteBanksController';

export const deleteBanksFactory = async (
  req: ExpressRequest,
  res: ExpressResponse
) => {
  try {
    const prismaBanksRepository = new PrismaBanksRepository();
    const deleteBanksService = new DeleteBanksService(prismaBanksRepository);
    const deleteBanksController = new DeleteBanksController(deleteBanksService);

    await deleteBanksController.handle(req, res);
  } catch (error: any) {
    return res.status(error?.statusCode || 500).json({
      message: error?.message || 'Unexpected server error',
    });
  }
};
