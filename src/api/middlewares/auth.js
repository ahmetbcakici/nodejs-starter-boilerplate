import jwt from 'jsonwebtoken';

import { api } from '../../config'

export default async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).send('Unauthorized.');

  try {
    const verifiedToken = await jwt.verify(token, api.jwtSecretKey);
    req.user = verifiedToken.user;
    return next();
  } catch (e) {
    return res.status(403).send('Invalid token.');
  }
};