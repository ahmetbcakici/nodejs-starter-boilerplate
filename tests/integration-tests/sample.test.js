import request from 'supertest'
import app from '../../src/app'

describe('Lorem', () => {
  it('ipsum', async () => {
    const res = await request(app)
      .get('/route-name')
      console.log(res)
      
    expect(res.status).toEqual(200)
    expect(res.body.message).toEqual('Success request')
  })
})