import { Product } from './Product';

export type Order = {
  id: number;
  userId: number;
  productId?: number[] | Product[];
};

export type GetProductsByOrder = {
  id: number;
  userId: number;
  productIds: Product[];
};

export type OrderWithProductIds = {
  id: number;
  userId: number;
  productIds: number[];
};