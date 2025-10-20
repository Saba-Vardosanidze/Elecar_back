const asyncHandler = require('express-async-handler');
const { StatusCodes } = require('http-status-codes');
const { PrismaClient } = require('@prisma/client');
const cloudinary = require('../lib/cloudinary');

const prisma = new PrismaClient();

const getAllLuxuryCar = asyncHandler(async (req, res) => {
  const { brand } = req.query;
  const filter = {};
  if (brand) filter.brand = brand;

  const luxuryCar = await prisma.luxuryCar.findMany({
    where: filter,
  });

  if (!luxuryCar || luxuryCar.length === 0) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: 'No luxury cars found' });
  }

  res.status(StatusCodes.OK).json(luxuryCar);
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

const CreateLuxuryCar = asyncHandler(async (req, res) => {
  const { brand, name, model, image, price } = req.body;
  if (!brand || !name || !model || !image || !price) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'brand,name,model,image and price is required' });
  }
  const uploadResponse = await cloudinary.uploader.upload(image);

  const newLuxuryCar = await prisma.luxuryCar.create({
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
module.exports = { getAllLuxuryCar, GetLuxuryCarById, CreateLuxuryCar };
