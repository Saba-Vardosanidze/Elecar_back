const express = require('express');
const {
  getAllLuxuryCar,
  CreateLuxuryCar,
  GetLuxuryCarById,
} = require('../controllers/luxuryCarController');

const luxuryCar = express.Router();

luxuryCar.get('/', getAllLuxuryCar);
luxuryCar.get('/:id', GetLuxuryCarById);
luxuryCar.post('/createLuxuryCar', CreateLuxuryCar);

module.exports = luxuryCar;
