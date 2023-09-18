export type ProductIds = number | { id: number };

export type Order = {
  id: number;
  userId: number;
  productIds?: ProductIds[];
};
