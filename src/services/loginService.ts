import { compareSync } from 'bcryptjs';
import UserModel from '../database/models/user.model';
import jwt from '../auth/jwt';

type Token = { 
  token: string;
};

type Login = {
  username: string;
  password: string;
};

const signin = async (login: Login): Promise<Token> => {
  const isUser = await UserModel.findOne({ where: { username: login.username } });

  if (!isUser || !compareSync(login.password, isUser.dataValues.password)) {
    return { token: 'UNAUTHORIZED' };
  }

  const { id, username } = isUser.dataValues;
  const token = jwt.generateToken({ id, username });

  return { token };
};

/*
(async (): Promise<void> => {
  console.log(signin({ username: 'Hagar', password: 'asdfasdfasdfasfd' }));
})();
*/

export default {
  signin,
};
