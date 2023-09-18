import { Router } from 'express';
import ordersController from '../controllers/ordersController';

const ordersRouter: Router = Router();

ordersRouter.get('/', ordersController.findAll);

export default ordersRouter;
