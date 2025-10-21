import { Categories } from '../../../generated/prisma';
import {
  categoriesRepository,
  categoriesDTO,
} from '../../../repositories/categoriesRepository';

export class UpdateCategoriesServices {
  constructor(private cateRepo: categoriesRepository) {}

  async execute(data: Partial<categoriesDTO>, id: string): Promise<Categories> {
    console.log('[Service] Executing update', { id, data });
    const category = await this.cateRepo.update(id, data);

    if (!category) {
      console.log('[Service] Category not found, throwing AppError');
      throw new Error('Categoria não encontrada');
    }
    console.log('[Service] Update successful', category);
    return category;
  }
}
