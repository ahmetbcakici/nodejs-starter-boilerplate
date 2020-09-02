import mongoose from 'mongoose';

import { api } from '../config'

export default async () => {
  await mongoose.connect(api.dbUri, { useNewUrlParser: true, useCreateIndex: true }, err => {
    if (err) {
      console.error(err)
      throw err;
    }
    console.log('Mongoose connected!')
  });
};
