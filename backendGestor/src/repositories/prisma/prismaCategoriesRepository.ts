import { prisma } from '../../db/prisma';
import { Categories } from '../../generated/prisma';
import { categoriesDTO, categoriesRepository } from '../categoriesRepository';

export class PrismaCategoriesRepository implements categoriesRepository {
  async getAllCategories(): Promise<Categories[]> {
    const categories = await prisma.categories.findMany();
    return categories;
  }
  async create(data: categoriesDTO): Promise<Categories> {
    const categories = await prisma.categories.create({
      data,
    });
    return categories;
  }
  async delete(userId: string, id: string): Promise<void> {
    const categories = await prisma.categories.delete({
      where: {
        id,
        userId,
      },
    });
  }
  async update(id: string, data: Partial<categoriesDTO>): Promise<Categories> {
    try {
      const categories = await prisma.categories.update({
        where: { id },
        data: { ...data },
      });
      console.log('[Repository] Update successful', categories);
      return categories;
    } catch (err: any) {
      console.error('[Repository] Error updating category:', err);

      if (err.code === 'P2025') {
        console.log('[Repository] Category not found for id:', id);
        throw new Error('Categoria não encontrada');
      }
      throw err;
    }
  }
}
