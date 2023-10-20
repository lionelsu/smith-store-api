import express from 'express';
import productsRouter from './routes/productsRoutes';
import errorMiddleware from './middlewares/errorMiddleware';
import ordersRouter from './routes/ordersRoutes';
import loginRouter from './routes/loginRoutes';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/login', loginRouter);

app.use(errorMiddleware);

export default app;
