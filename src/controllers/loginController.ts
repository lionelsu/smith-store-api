import { Request, Response } from 'express';
import loginService from '../services/loginService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const login = async (req: Request, res: Response) => {
  const isUser = await loginService.signin(req.body);
  const { token } = isUser;

  if (token === 'UNAUTHORIZED') {
    return res.status(mapStatusHTTP('UNAUTHORIZED')).json({ 
      message: 'Username or password invalid',
    });
  }

  return res.status(mapStatusHTTP('SUCCESSFUL')).json({ token });
};

export default {
  login,
};
