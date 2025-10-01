import { Categories, CategoryType } from '../generated/prisma';

export interface categoriesDTO {
  name: string;
  userId: string;
  type: CategoryType;
  color?: string | null;
  icon?: string | null;
}

export interface categoriesRepository {
  getAllCategories(): Promise<Categories[]>;

  create(data: categoriesDTO): Promise<Categories>;

  delete(id: string, userId: string): Promise<void>;

  update(id: string, data: Partial<categoriesDTO>): Promise<categoriesDTO>;
}
