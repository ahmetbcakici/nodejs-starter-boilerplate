import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

require('./loaders').default({ expressApp: app });

app.listen(3000 || process.env.PORT, err => {
  if (err) {
    console.log('err')
    return process.exit(1);
  }
  console.log('calisti')
});
