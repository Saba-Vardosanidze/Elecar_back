const express = require('express');
const { PrismaClient } = require('@prisma/client');
const electircCarRouters = require('./routes/electricCarRouters');
const luxuryCar = require('./routes/luxuryCarRouters');
const auth = require('./routes/authRouters');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./lib/swagger');

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/electricCar', electircCarRouters);
app.use('/api/luxuryCar', luxuryCar);
app.use('/api/auth', auth);

app.listen(PORT, () => {
  console.log('http://localhost:4000');
  console.log(`Swagger Docs: http://localhost:${PORT}/api-docs`);
});
