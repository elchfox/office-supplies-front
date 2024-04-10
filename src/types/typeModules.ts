import { TBaseData } from ".";

export type TCategory = {
  name: string;
  categoryId?: number;
  productTypeId: number;
  productType?: string;
} & TBaseData;
export type TCompany = {
  name: string;
  companyNumber?: number;
} & TBaseData;
