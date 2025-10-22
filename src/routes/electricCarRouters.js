const express = require('express');
const {
  GetAllElectricCar,
  GetElectricCarById,
  UpdateElectricCar,
  CreateElectricCar,
  DeleteElectricCar,
} = require('../controllers/electricCarController');

const electircCarRouters = express.Router();

/**
 * @swagger
 * tags:
 *   name: ElectricCar
 *   description: Electric car management
 */

/**
 * @swagger
 * /api/electricCar:
 *   get:
 *     tags: [ElectricCar]
 *     summary: Get all electric cars
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *     responses:
 *       200:
 *         description: List of electric cars
 */
electircCarRouters.get('/', GetAllElectricCar);

/**
 * @swagger
 * /api/electricCar/{id}:
 *   get:
 *     tags: [ElectricCar]
 *     summary: Get an electric car by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Electric car ID
 *     responses:
 *       200:
 *         description: Electric car object
 */
electircCarRouters.get('/:id', GetElectricCarById);

/**
 * @swagger
 * /api/electricCar/createElectricCar:
 *   post:
 *     tags: [ElectricCar]
 *     summary: Create a new electric car
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - model
 *               - topSpeed
 *               - engineType
 *               - zeroToHundred
 *               - price
 *               - image
 *             properties:
 *               name:
 *                 type: string
 *               model:
 *                 type: string
 *               topSpeed:
 *                 type: string
 *               engineType:
 *                 type: string
 *               zeroToHundred:
 *                 type: integer
 *               price:
 *                 type: integer
 *               image:
 *                 type: string
 *     responses:
 *       201:
 *         description: Electric car created
 */
electircCarRouters.post('/createElectricCar', CreateElectricCar);

/**
 * @swagger
 * /api/electricCar/{id}:
 *   delete:
 *     tags: [ElectricCar]
 *     summary: Delete an electric car
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Electric car ID
 *     responses:
 *       200:
 *         description: Car deleted successfully
 */
electircCarRouters.delete('/:id', DeleteElectricCar);

/**
 * @swagger
 * /api/electricCar/{id}:
 *   patch:
 *     tags: [ElectricCar]
 *     summary: Update an electric car
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               model:
 *                 type: string
 *               topSpeed:
 *                 type: string
 *               engineType:
 *                 type: string
 *               zeroToHundred:
 *                 type: integer
 *               price:
 *                 type: integer
 *               image:
 *                 type: string
 *     responses:
 *       200:
 *         description: Electric car updated
 */
electircCarRouters.patch('/:id', UpdateElectricCar);

module.exports = electircCarRouters;
