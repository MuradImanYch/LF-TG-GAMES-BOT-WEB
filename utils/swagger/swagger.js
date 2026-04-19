const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'LF BOT API',
      version: '1.0.0',
      description: 'API documentation for LF BOT project',
    },
    servers: [
      {
        url: process.env.SERVER_URL || 'http://localhost:8080',
        description: 'Local server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./routes/*.js'], // где лежат комментарии swagger
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;