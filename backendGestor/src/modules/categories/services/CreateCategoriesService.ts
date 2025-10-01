import { Categories } from '../../../generated/prisma';

import {
  categoriesDTO,
  categoriesRepository,
} from '../../../repositories/categoriesRepository';

export class CreateCategoriesService {
  constructor(private cateRepo: categoriesRepository) {}

  async execute(data: categoriesDTO): Promise<Categories> {
    // Cria a operação no banco

    return await this.cateRepo.create(data);
  }
}
