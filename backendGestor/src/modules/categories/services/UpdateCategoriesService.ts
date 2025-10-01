import { Categories } from '../../../generated/prisma';
import {
  categoriesRepository,
  categoriesDTO,
} from '../../../repositories/categoriesRepository';

export class UpdateCategoriesServices {
  constructor(private cateRepo: categoriesRepository) {}

  async execute(data: Partial<categoriesDTO>, id: string): Promise<Categories> {
    // Cria a operação no banco

    return this.cateRepo.update(id, data);
  }
}
