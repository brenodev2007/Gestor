import {
  reportsDTO,
  reportsRepository,
} from '../../../repositories/reportsRepository';

export class ListReportsService {
  constructor(private reportRepo: reportsRepository) {}

  async execute(filters: Partial<reportsDTO>): Promise<reportsDTO[]> {
    // Cria a operação no banco

    const reports = await this.reportRepo.list(filters);

    return reports;
  }
}
