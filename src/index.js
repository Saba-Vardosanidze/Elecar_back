const express = require('express');
const { PrismaClient } = require('@prisma/client');
const electircCarRouters = require('./routes/electricCarRouters');

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/api/electricCar', electircCarRouters);

app.listen(PORT, () => {
  console.log('http://localhost:4000');
});
