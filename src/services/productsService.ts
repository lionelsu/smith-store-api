import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';

const insertProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
  const { dataValues } = await ProductModel.create(product);

  return dataValues;
};

/*
const teste = {
  name: 'Martelo de Thor',
  price: '30 peças de ouro',
  orderId: 4,
};

(async (): Promise<void> => {
  console.log(await insertProduct(teste));
})();
*/

export default {
  insertProduct,
};
