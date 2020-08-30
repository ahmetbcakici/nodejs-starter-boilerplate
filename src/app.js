import express from 'express';
import dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 8080;
dotenv.config();

require('./loaders').default({ expressApp: app });

app.listen(port, err => {
  if (err) {
    console.log('err')
    return process.exit(1);
  }
  console.log(`Server is running on ${port}`)
});
