import { Product } from "../../src/types/Product";
import { SequelizeValues } from "./TypeMock";

const product: Product = {
  "id": 1,
  "name": "Martelo de Thor",
  "price": "30 peças de ouro",
  "orderId": 4
};

const productList: SequelizeValues<Product>[] = [
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
