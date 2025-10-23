import type {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';
import { DeleteBanksService } from '../Services/DeleteBanksService';
import { AppError } from '../../../utils/AppError';

export class DeleteBanksController {
  constructor(private deleteBanksService: DeleteBanksService) {}

  async handle(req: ExpressRequest, res: ExpressResponse) {
    try {
      const { id } = req.params;

      await this.deleteBanksService.execute(id);

      return res.status(204).send();
    } catch (error: any) {
      console.error(error);

      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
      }

      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
