import bcrypt from 'bcryptjs'
import { model, Schema } from 'mongoose'

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
  },
  registerDate: {
    type: Date,
    default: Date.now,
  }
})

userSchema.pre('save', async function (next) {
  const user = this
  user.password = await bcrypt.hash(user.password, 10)
  next()
})

const User = model('User', userSchema)
export default User