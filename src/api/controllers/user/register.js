import jwt from 'jsonwebtoken'

import { User } from '../../../models'
import { registerSchema } from '../../validators/user.validators'
import { logger } from '../../../config/'

export default async (req, res, next) => {
  try {
    await registerSchema.validateAsync(req.body)

    const user = await User.create(req.body)
    user.password = null // prevent send pw to client

    /* @TODO: prevent log pw */
    logger.info("registerUser:" + JSON.stringify(req.body))

    const token = await jwt.sign({ user }, process.env.JWT_SECRET_KEY)

    return res.status(201).json({ user, token })
  }
  catch (err) {
    return next(err)
  }
}