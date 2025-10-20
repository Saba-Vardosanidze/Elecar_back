const asyncHandler = require('express-async-handler');
const { StatusCodes } = require('http-status-codes');
const { PrismaClient } = require('@prisma/client');
const cloudinary = require('../lib/cloudinary');

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
    return res.status(StatusCodes.NOT_FOUND).json({ message: 'Car not Found' });
  }
  res.status(StatusCodes.OK).json(electricCar);
});

const CreateElectricCarById = asyncHandler(async (req, res) => {
  const { name, model, topSpeed, engineType, zeroToHundred, price, image } =
    req.body;

  if (
    !name ||
    !model ||
    !topSpeed ||
    !engineType ||
    !zeroToHundred ||
    !price ||
    !image
  ) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message:
        'model,name,topSpeed,engineType,zeroToHundred,price and image is required',
    });
  }
  const uploadResponse = await cloudinary.uploader.upload(image);

  const newElectricCar = await prisma.electricCar.create({
    data: {
      name,
      model,
      topSpeed,
      engineType,
      zeroToHundred,
      price,
      image: uploadResponse.secure_url,
    },
  });

  res.status(StatusCodes.CREATED).json(newElectricCar);
});

const DeleteElectricCar = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedCar = prisma.electricCar.delete({
    where: { id: id },
  });

  res.status(200).json({
    message: 'Car deleted successfully',
    deletedCar,
  });
});

module.exports = {
  GetAllElectricCar,
  GetElectricCarById,
  CreateElectricCarById,
  DeleteElectricCar,
};
