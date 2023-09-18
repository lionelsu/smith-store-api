import { Order } from "../../src/types/Order";
import { SequelizeValues } from "./TypeMock";

const orderList: SequelizeValues<Order>[] = [
  {
    dataValues: {
      "id": 1,
      "userId": 1,
      "productIds": [
        { "id": 2 },
        { "id": 1 }
      ],
    },
  },
  {
    dataValues: {
      "id": 2,
      "userId": 3,
      "productIds": [
        { "id": 4 },
        { "id": 3 }
      ],
    },
  },
  {
    dataValues: {
      "id": 3,
      "userId": 2,
      "productIds": [
        { "id": 5 }
      ],
    },
  },
  {
    dataValues: {
      id: 4,
      userId: 3,
      productIds: undefined,
    },
  },
];

export default {
  orderList,
};
