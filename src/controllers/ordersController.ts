import { Request, Response } from 'express';
import ordersService from '../services/ordersService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const findAll = async (req: Request, res: Response) => {
  const orderList = await ordersService.listOrders();

  res.status(mapStatusHTTP('SUCCESSFUL')).json(orderList);
};

const insertOrder = async (req: Request, res: Response) => {
  const { userId, productIds } = req.body;

  const { id, ...newOrder } = await ordersService.insertOrder({ userId, productIds });

  res.status(mapStatusHTTP('CREATED')).json(newOrder);
};

export default {
  findAll,
  insertOrder,
};
