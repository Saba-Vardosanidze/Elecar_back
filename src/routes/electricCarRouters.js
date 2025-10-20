const express = require('express');
const {
  GetAllElectricCar,
  GetElectricCarById,
  CreateElectricCarById,
} = require('../controllers/electricCarController');
const electircCarRouters = express.Router();

electircCarRouters.get('/', GetAllElectricCar);
electircCarRouters.get('/:id', GetElectricCarById);
electircCarRouters.post('/createElectricCar', CreateElectricCarById);
electircCarRouters.post('/deleteElectricCar/:id', CreateElectricCarById);

module.exports = electircCarRouters;
