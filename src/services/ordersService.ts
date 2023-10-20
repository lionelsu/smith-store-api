import db from '../database/models';
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

const insertOrder = async (order: Omit<Order, 'id'>): Promise<Order> => {
  const { userId, productIds } = order;
  const result = await db.transaction(async (transaction) => {
    const newOrder = await OrderModel.create({ userId }, { transaction });
    const updatePromises = productIds?.map((productId) => ProductModel.update(
      { orderId: newOrder.dataValues.id },
      { where: { id: productId }, transaction },
    ));
    if (updatePromises) {
      await Promise.all(updatePromises);
    }
    return { ...newOrder.dataValues, productIds };
  });

  return result;
};

export default {
  listOrders,
  insertOrder,
};
