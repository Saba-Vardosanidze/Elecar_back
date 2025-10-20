const express = require('express');
const {
  getAllLuxuryCar,
  CreateLuxuryCar,
  GetLuxuryCarById,
  DeleteLuxuryCar,
  UpdateLuxuryCar,
} = require('../controllers/luxuryCarController');

const luxuryCar = express.Router();

luxuryCar.get('/', getAllLuxuryCar);
luxuryCar.get('/:id', GetLuxuryCarById);
luxuryCar.post('/createLuxuryCar', CreateLuxuryCar);
luxuryCar.delete('/:id', DeleteLuxuryCar);
luxuryCar.patch('/:id', UpdateLuxuryCar);

module.exports = luxuryCar;
