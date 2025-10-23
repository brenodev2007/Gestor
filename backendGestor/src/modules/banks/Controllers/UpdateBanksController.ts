import type {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';
import { AppError } from '../../../utils/AppError';
import { UpdateBanksService } from '../Services/UpdateBanksService';

export class UpdateBanksController {
  constructor(private updateBanksService: UpdateBanksService) {}

  async handle(req: ExpressRequest, res: ExpressResponse) {
    try {
      const { id } = req.params;
      const data = req.body;

      const updatedBank = await this.updateBanksService.execute(id, data);

      return res.status(200).json(updatedBank);
    } catch (error: any) {
      console.error(error);

      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
      }

      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
