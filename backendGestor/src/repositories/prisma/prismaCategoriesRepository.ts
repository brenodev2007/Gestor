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
  async delete(id: string): Promise<void> {
    const categories = await prisma.categories.delete({
      where: {
        id,
      },
    });
  }
  async update(
    id: string,
    data: Partial<categoriesDTO>
  ): Promise<categoriesDTO> {
    const categories = await prisma.categories.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return categories;
  }
}
