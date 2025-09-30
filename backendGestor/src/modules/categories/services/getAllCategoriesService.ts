import { Categories, Users } from '../../../generated/prisma';
import { AppError } from '../../../utils/AppError';

import { categoriesRepository } from '../../../repositories/categoriesRepository';

export class GetAllCategoriesService {
  constructor(private cateRepo: categoriesRepository) {}

  async execute(): Promise<Categories[]> {
    // busca o usuário no banco pelo id
    const category = await this.cateRepo.getAllCategories();

    if (!category) {
      throw new AppError('Usuário não encontrado', 404);
    }

    return category;
  }
}
