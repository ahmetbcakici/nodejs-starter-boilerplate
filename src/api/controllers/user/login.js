import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { User } from '../../../models';

export default async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).send('You can not leave fields empty.');

  const user = await User.findOne({ email });
  if (!user) return res.status(404).send('User not found.');

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).send('Incorrect Pass');

  user.password = null;
  const token = await jwt.sign({ user }, process.env.JWT_SECRET_KEY);
  res.json({ user, token });
};