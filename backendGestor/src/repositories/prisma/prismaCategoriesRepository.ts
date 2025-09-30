import { prisma } from '../../db/prisma';
import { Categories } from '../../generated/prisma';
import { categoriesDTO, categoriesRepository } from '../categoriesRepository';

export class PrismaCategoriesRepository implements categoriesRepository {
  getAllCategories(): Promise<Categories[]> {
    const categories = prisma.categories.findMany();
    return categories;
  }
  create(data: categoriesDTO): Promise<Categories> {
    const categories = prisma.categories.create({
      data,
    });
    return categories;
  }
  delete(id: string): Promise<void> {
    const categories = prisma.categories.delete({
      where: {
        id,
      },
    });
    return categories.then(() => {
      return;
    });
  }
  update(id: string, data: Partial<categoriesDTO>): Promise<categoriesDTO> {
    const categories = prisma.categories.update({
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
