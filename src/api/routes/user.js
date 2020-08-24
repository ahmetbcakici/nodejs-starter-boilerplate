import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  console.log('ww')
  res.send('Aww')
})

export default router