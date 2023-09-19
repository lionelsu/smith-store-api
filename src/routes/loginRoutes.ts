import { Router } from 'express';
import loginController from '../controllers/loginController';
import validateSchema from '../middlewares/validateSchema';

const loginRouter: Router = Router();

loginRouter.post('/', validateSchema.loginField, loginController.login);

export default loginRouter;
