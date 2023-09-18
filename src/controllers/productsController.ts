import { Request, Response } from 'express';
import productService from '../services/productsService';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import { Product } from '../types/Product';

const create = async (req: Request, res: Response) => {
  const { orderId, ...productData }: Product = await productService.insertProduct(req.body);

  res.status(mapStatusHTTP('CREATED')).json(productData);
};

const findAll = async (req: Request, res: Response) => {
  const productList: Product[] = await productService.listProducts();

  res.status(mapStatusHTTP('SUCCESSFUL')).json(productList);
};

export default {
  create,
  findAll,
};
