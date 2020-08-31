import jwt from 'jsonwebtoken';

import { emailVerificationSchema } from '../../validators/user.validators'

export default async (req, res, next) => {
  const { code, token } = req.body

  try {
    await emailVerificationSchema.validateAsync(req.body)

    const { confirmCode } = await jwt.verify(token, process.env.JWT_SECRET_KEY)

    if (code !== confirmCode) {
      const err = new Error('Incorrect confirm code')
      err['status'] = 403
      return next(err)
    }

    return res.status(200).send()
  } catch (err) {
    return next(err)
  }
}