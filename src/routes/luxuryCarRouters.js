const express = require('express');
const {
  getAllLuxuryCar,
  CreateLuxuryCar,
  GetLuxuryCarById,
  DeleteLuxuryCar,
  UpdateLuxuryCar,
} = require('../controllers/luxuryCarController');

const luxuryCar = express.Router();

/**
 * @swagger
 * tags:
 *   name: LuxuryCar
 *   description: Luxury Car management
 */

/**
 * @swagger
 * /api/luxuryCar:
 *   get:
 *     tags: [LuxuryCar]
 *     summary: Get all luxury cars
 *     parameters:
 *       - in: query
 *         name: brand
 *         schema:
 *           type: string
 *         description: Filter by brand
 *     responses:
 *       200:
 *         description: List of luxury cars
 *       404:
 *         description: No luxury cars found
 */
luxuryCar.get('/', getAllLuxuryCar);

/**
 * @swagger
 * /api/luxuryCar/{id}:
 *   get:
 *     tags: [LuxuryCar]
 *     summary: Get luxury car by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Luxury car ID
 *     responses:
 *       200:
 *         description: Luxury car details
 *       404:
 *         description: Car not found
 */
luxuryCar.get('/:id', GetLuxuryCarById);

/**
 * @swagger
 * /api/luxuryCar/createLuxuryCar:
 *   post:
 *     tags: [LuxuryCar]
 *     summary: Create a new luxury car
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - brand
 *               - name
 *               - model
 *               - image
 *               - price
 *             properties:
 *               brand:
 *                 type: string
 *               name:
 *                 type: string
 *               model:
 *                 type: string
 *               image:
 *                 type: string
 *                 description: Image URL
 *               price:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Luxury car created successfully
 *       400:
 *         description: Missing required fields
 */
luxuryCar.post('/createLuxuryCar', CreateLuxuryCar);

/**
 * @swagger
 * /api/luxuryCar/{id}:
 *   delete:
 *     tags: [LuxuryCar]
 *     summary: Delete a luxury car by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Luxury car ID
 *     responses:
 *       200:
 *         description: Car deleted successfully
 *       404:
 *         description: Car not found
 */
luxuryCar.delete('/:id', DeleteLuxuryCar);

/**
 * @swagger
 * /api/luxuryCar/{id}:
 *   patch:
 *     tags: [LuxuryCar]
 *     summary: Update a luxury car by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Luxury car ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               brand:
 *                 type: string
 *               name:
 *                 type: string
 *               model:
 *                 type: string
 *               image:
 *                 type: string
 *                 description: Image URL
 *               price:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Luxury car updated successfully
 *       404:
 *         description: Car not found
 */
luxuryCar.patch('/:id', UpdateLuxuryCar);

module.exports = luxuryCar;
