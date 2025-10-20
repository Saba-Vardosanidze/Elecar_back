const express = require('express');
const {
  GetAllElectricCar,
  GetElectricCarById,
  UpdateElectricCar,
  CreateElectricCar,
  DeleteElectricCar,
} = require('../controllers/electricCarController');
const electircCarRouters = express.Router();

electircCarRouters.get('/', GetAllElectricCar);
electircCarRouters.get('/:id', GetElectricCarById);
electircCarRouters.post('/createElectricCar', CreateElectricCar);
electircCarRouters.delete('/:id', DeleteElectricCar);
electircCarRouters.patch('/:id', UpdateElectricCar);

module.exports = electircCarRouters;
