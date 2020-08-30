import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { User } from '../../../models'
import { registerSchema } from '../../validators/user.validators'

export default async (req, res) => {
  const {
    name,
    surname,
    username,
    email,
    password,
  } = req.body;

  try {
    await registerSchema.validateAsync(req.body)
    const hash = await bcrypt.hash(password, 10)

    req.body.password = hash

    const user = await User.create(req.body)
    user.password = null

    const token = await jwt.sign({ user }, process.env.JWT_SECRET_KEY)

    return res.status(201).json({ user, token })
  }
  catch (err) {
    //console.log(err)
    //if (err.details[0].message)
      return res.status(400).send(err)

    //res.status(400).send('Something went wrong!')
  }
}
