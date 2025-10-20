const asyncHandler = require('express-async-handler');
const { StatusCodes } = require('http-status-codes');
const { PrismaClient } = require('@prisma/client');
const cloudinary = require('../lib/cloudinary');

const prisma = new PrismaClient();

const getAllLuxuryCar = asyncHandler(async (req, res) => {
  const { carBrand } = req.query;
  const filter = {};
  if (carBrand) filter.brand = carBrand;

  const luxuryCar = await prisma.luxuryCar.findMany({
    where: filter,
  });

  if (!luxuryCar || luxuryCar.length === 0) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: 'No electricCars found' });
  }

  res.status(StatusCodes.OK).json(electricCars);
});

const GetLuxuryCarById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const luxuryCar = await prisma.luxuryCar.findUnique({
    where: { id: Number(id) },
  });
  if (!luxuryCar) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: 'Car not Found' });
  }
  res.status(StatusCodes.OK).json(luxuryCar);
});

const CreateLuxuryCarByID = asyncHandler(async (req, res) => {
  const { brand, name, model, image, price } = req.body;
  if (!brand || !name || !model || !image || !price) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'brand,name,model,image and price is requred' });
  }
  const uploadResponse = await cloudinary.uploader.upload(image);

  const newLuxuryCar = await prisma.electricCar.create({
    data: {
      brand,
      name,
      model,
      price,
      image: uploadResponse.secure_url,
    },
  });

  res.status(StatusCodes.CREATED).json(newLuxuryCar);
});
module.exports = { getAllLuxuryCar, GetLuxuryCarById, CreateLuxuryCarByID };
