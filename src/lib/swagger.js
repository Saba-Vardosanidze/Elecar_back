const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');
const PORT = process.env.PORT || 4000;

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Admin Auth API',
      version: '1.0.0',
      description: 'API documentation for admin authentication system',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: [path.join(__dirname, '../routes/*.js')],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;
