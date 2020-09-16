export default {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API',
      version: '1.0.0',
      description: 'Lorem ipsum dolor sit amet.',
      license: {
        name: 'Unknown',
        url: 'https://choosealicense.com/licenses/mit/',
      },
      contact: {
        name: 'The Boilerplate',
        url: 'https://github.com/ahmetbcakici/nodejs-starter-boilerplate',
        email: 'ahmetbcakici@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:8080/api/',
      },
    ],
  },
  apis: [
    '../models/*'
  ],
};