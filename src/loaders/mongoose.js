import mongoose from 'mongoose';

export default async () => {
  await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useCreateIndex: true }, err => {
    if (err) {
      console.error(err)
      throw err;
    }
    console.log('Mongoose connected!')
  });
};
