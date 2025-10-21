import { Banks } from '../generated/prisma';

export interface banksDTO {
  id: string;
  name: string;
  logoUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface banksRepository {
  create(data: banksDTO): Promise<Banks>;
  getAllBanks(): Promise<Banks[]>;
  delete(id: string): Promise<void>;
  update(id: string, data: Partial<banksDTO>): Promise<Banks>;
}
