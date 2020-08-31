import bcrypt from 'bcryptjs'

import { sendCodeToEmail, generateRandomCode } from '../../../utils'
import { User } from '../../../models'
import { emailSchema } from '../../validators/user.validators'

export default async (req, res, next) => {
  const { email } = req.body;
  const newPassword = generateRandomCode(8)

  try {
    await emailSchema.validateAsync(req.body)

    const hash = await bcrypt.hash(newPassword, 10)

    const user = await User.findOneAndUpdate(
      { email },
      { password: hash },
      { new: true }
    );

    if (!user) {
      const err = new Error('There is no user with this e-mail address')
      err['status'] = 403
      return next(err)
    }

    console.log(newPassword)
    /* await sendCodeToEmail({email, newPassword}); */
    return res.status(200).send()
  }
  catch (err) {
    return next(err)
  }
}
