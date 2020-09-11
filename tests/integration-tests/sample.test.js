import request from 'supertest'
import app from '../../src/app'

describe('Lorem', () => {
  it('ipsum', async () => {
    const res = await request(app)
      .get('/api/route')
      .send({
        name: 'Ahmet'
      })
    //expect(res.status).toEqual(200)
    expect(res.body.deeplink).toEqual('Ahmet')
  })
})