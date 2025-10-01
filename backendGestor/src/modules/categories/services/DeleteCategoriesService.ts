import { categoriesRepository } from '../../../repositories/categoriesRepository';
import { operationsRepository } from '../../../repositories/operationsRepository';

export class DeleteCategoriesService {
  constructor(private cateRepo: categoriesRepository) {}

  async execute(userId: string, id: string): Promise<void> {
    return this.cateRepo.delete(userId, id);
  }
}
