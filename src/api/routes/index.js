import { Router } from 'express';
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

import user from './user'
import { swaggerConfig } from '../../config'

const router = Router();
const specs = swaggerJsdoc(swaggerConfig);

router.use('/docs', swaggerUi.serve);
router.get(
  '/docs',
  swaggerUi.setup(specs, {
    explorer: true,
  })
);

router.use('/user', user)

export default router