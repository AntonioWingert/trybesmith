import jwt, { Secret } from 'jsonwebtoken';

const { JWT_SECRET } = process.env as { JWT_SECRET: Secret };

const generateToken = (payload: object): string => {
  const token = jwt.sign(payload, JWT_SECRET, { 
    expiresIn: '7d', algorithm: 'HS256',
  });

  return token;
};

export default generateToken;