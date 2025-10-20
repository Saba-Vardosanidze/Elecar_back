const asyncHandler = require('express-async-handler');
const { StatusCodes } = require('http-status-codes');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const GetAllElectricCar = asyncHandler(async (req, res) => {
  const { limit = 3, page = 1, cartype } = req.query;
  const take = parseInt(limit);
  const skip = (parseInt(page) - 1) * take;

  const filter = {};
  if (cartype) filter.cartype = cartype;

  const electricCars = await prisma.electricCar.findMany({
    where: filter,
    take,
    skip,
  });

  if (!electricCars || electricCars.length === 0) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: 'No electricCars found' });
  }

  res.status(StatusCodes.OK).json(electricCars);
});

const GetElectricCarById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const electricCar = await prisma.electricCar.findUnique({
    where: { id: Number(id) },
  });
  if (!electricCar) {
    return res.status(404).json({ message: 'Car not Found' });
  }
  res.status(200).json(electricCar);
});

module.exports = { GetAllElectricCar, GetElectricCarById };
