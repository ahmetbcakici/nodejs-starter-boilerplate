import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { User } from '../../../models'
import { loginSchema } from '../../validators/user.validators'
import { api } from '../../../config'

export default async (req, res, next) => {
  const { email, password } = req.body

  try {
    await loginSchema.validateAsync(req.body)

    const user = await User.findOne({ email })
    if (!user) {
      const err = new Error('User not found')
      err['status'] = 404
      return next(err)
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      const err = new Error('Incorrect password')
      err['status'] = 401
      return next(err)
    }

    user.password = null
    const token = await jwt.sign({ user }, api.jwtSecretKey)
    res.status(200).json({ user, token })
  }
  catch (err) {
    return next(err)
  }
}