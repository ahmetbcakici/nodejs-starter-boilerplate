import jwt from 'jsonwebtoken'

import { User } from '../../../models'
import { registerSchema } from '../../validators/user.validators'
import { logger } from '../../../config/'
import { api } from '../../../config'

export default async (req, res, next) => {
  try {
    await registerSchema.validateAsync(req.body)

    const user = await User.create(req.body)
    user.password = null // prevent send pw to client
    req.body.password = null // prevent log pw

    logger.info("registerUser:" + JSON.stringify(req.body))
    const token = await jwt.sign({ user }, api.jwtSecretKey)

    return res.status(201).json({ user, token })
  }
  catch (err) {
    return next(err)
  }
}