import { AppError } from '../../../utils/AppError';
import { GetAllBanksService } from '../Services/GetAllBanksService';
import { Request, Response } from 'express';

export class GetAllBanksController {
  constructor(private getAllBanksService: GetAllBanksService) {}

  async handle(req: Request, res: Response) {
    try {
      const banks = await this.getAllBanksService.execute();

      return res.json();
    } catch (error) {
      console.error(error);

      throw new AppError('Erro interno do servidor', 500);
    }
  }
}
