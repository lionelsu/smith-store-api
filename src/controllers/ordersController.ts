import { Request, Response } from 'express';
import ordersService from '../services/ordersService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const findAll = async (req: Request, res: Response) => {
  const orderList = await ordersService.listOrders();

  res.status(mapStatusHTTP('SUCCESSFUL')).json(orderList);
};

export default {
  findAll,
};
