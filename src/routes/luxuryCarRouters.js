const express = require('express');
const { getAllLuxuryCar } = require('../controllers/luxuryCarController');

const luxuryCar = express.Router();

luxuryCar.get('/', getAllLuxuryCar);

module.exports = luxuryCar;
