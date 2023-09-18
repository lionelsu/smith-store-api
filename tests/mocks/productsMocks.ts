import ProductModel from "../../src/database/models/product.model";
import { Product } from "../../src/types/Product";

const product: Product = {
  "id": 1,
  "name": "Martelo de Thor",
  "price": "30 peças de ouro",
  "orderId": 4
};

type sequelizeValues = {
  dataValues: Product;
};

const productList: sequelizeValues[] = [
  {
    dataValues: { 
      id: 1,
      name: 'Excalibur',
      price: '10 peças de ouro',
      orderId: 1,
    },
  },
  {
    dataValues: { 
      id: 2,
      name: 'Espada Justiceira',
      price: '20 peças de ouro',
      orderId: 1,
    },
  },
];

export default {
  product,
  productList,
};
