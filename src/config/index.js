export { default as swaggerConfig } from './swagger.config'
export { default as logger } from './logger.config'

const { PORT } = process.env;

export const api = {
  port: PORT || 8080,
  prefix: "/api",
  specs: "/docs",
}