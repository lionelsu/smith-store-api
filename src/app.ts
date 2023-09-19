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

/*
app.use((error: any, req: any, res: any, next: any) => {
  if (error instanceof SyntaxError) {
    // Erro de análise de JSON
    console.log(error);
    return res.status(400).json({ error: 'Erro na análise de JSON' });
  }

  // Outros erros
  return next(error);
});
*/

app.use(errorMiddleware);

export default app;
