const express = require('express');
const {
  GetAllElectricCar,
  GetElectricCarById,
} = require('../controllers/electricCarController');
const electircCarRouters = express.Router();

electircCarRouters.get('/', GetAllElectricCar);
electircCarRouters.get('/:id', GetElectricCarById);

module.exports = electircCarRouters;
