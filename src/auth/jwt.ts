import jwt from 'jsonwebtoken';

const { JWT_SECRET = 'secret' } = process.env;

const jwtConfig = {
  expiresIn: '7d',
};

type Payload = {
  id: number,
  username: string,
};

const generateToken = (payload: Payload): string => jwt.sign(payload, JWT_SECRET, jwtConfig);

export default {
  generateToken,
};