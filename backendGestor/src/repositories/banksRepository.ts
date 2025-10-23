import { Banks } from '../generated/prisma';

export interface banksDTO {
  name: string;
  logoUrl?: string;
  idWallet?: string;
}

export interface banksRepository {
  create(data: banksDTO): Promise<Banks>;
  getAllBanks(): Promise<Banks[]>;
  delete(id: string): Promise<void>;
  update(id: string, data: Partial<banksDTO>): Promise<Banks>;
  findById(id: string): Promise<Banks | null>;
}
