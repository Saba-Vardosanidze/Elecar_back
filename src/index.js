const express = require('express');
const { PrismaClient } = require('@prisma/client');
const electircCarRouters = require('./routes/electricCarRouters');
const luxuryCar = require('./routes/luxuryCarRouters');
const auth = require('./routes/authRouters');

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/api/electricCar', electircCarRouters);
app.use('/api/luxuryCar', luxuryCar);
app.use('/api/auth', auth);

app.listen(PORT, () => {
  console.log('http://localhost:4000');
});
