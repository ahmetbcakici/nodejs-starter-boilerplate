import express from 'express'
import { api } from './config'

const app = express()
const port = api.port

require('./loaders').default({ expressApp: app })

app.listen(port, err => {
  if (err) {
    console.log(err)
    return process.exit(1)
  }
  console.log(`Server is running on ${port}`)
})

export default app
