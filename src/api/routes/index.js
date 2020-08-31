import { Router } from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

import user from './user'
import { api, swaggerConfig } from '../../config'

const router = Router()
const specs = swaggerJsdoc(swaggerConfig)

router.use(api.specs, swaggerUi.serve)
router.get(
  api.specs,
  swaggerUi.setup(specs, {
    explorer: true,
  })
)

router.use('/user', user)

export default router