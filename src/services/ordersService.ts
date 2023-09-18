import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';
import { Product } from '../types/Product';

const listOrders = async (): Promise<Order[]> => {
  const dataOrders = await OrderModel.findAll(
    {
      include: { 
        model: ProductModel, as: 'productIds', attributes: ['id'],
      },
    },
  );

  const orderList = dataOrders.map(({ dataValues }) => (
    {
      ...dataValues,
      productIds: dataValues.productIds?.map((product) => (product as Product).id) || [],
    }
  ));

  return orderList;
};

/*
(async (): Promise<void> => {
  console.log(await listOrders());
})();
*/

export default {
  listOrders,
};
