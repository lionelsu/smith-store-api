import { Router } from 'express';
import productsController from '../controllers/productsController';
import validateSchema from '../middlewares/validateSchema';

const productsRouter: Router = Router();

productsRouter.post('/', validateSchema.createProduct, productsController.create);
productsRouter.get('/', productsController.findAll);

export default productsRouter;
