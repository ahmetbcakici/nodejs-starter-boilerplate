/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - name
 *          - surname
 *          - email
 *          - password
 *        properties:
 *          name:
 *            type: string
 *          surname:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *          password:
 *            type: string
 */

import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  registerDate: {
    type: Date,
    default: Date.now,
  }
});

const User = model('User', userSchema);
export default User;