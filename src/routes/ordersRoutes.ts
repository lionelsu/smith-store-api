import { Router } from 'express';
import ordersController from '../controllers/ordersController';
import validateSchema from '../middlewares/validateSchema';

const ordersRouter: Router = Router();

ordersRouter.get('/', ordersController.findAll);
ordersRouter.post('/', validateSchema.createOrder, ordersController.insertOrder);

export default ordersRouter;
