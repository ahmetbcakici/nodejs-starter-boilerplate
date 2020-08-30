export default {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Mandarin Express API',
      version: '1.0.0',
      description: 'Lorem ipsum dolor sit amet.',
      license: {
        name: 'Unknown',
        url: 'https://choosealicense.com/licenses/mit/',
      },
      contact: {
        name: 'Mandarin',
        url: 'https://yesilscience.com/mandarin',
        email: 'lorem@ipsum.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:8080/api/v1',
      },
    ],
  },
  apis: [
    '../models/*'
  ],
};