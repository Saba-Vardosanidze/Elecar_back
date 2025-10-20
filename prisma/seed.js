const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  await prisma.electricCar.createMany({
    data: [
      {
        name: 'Tesla Model S',
        model: 'Plaid',
        topSpeed: '322 km/h',
        engineType: 'Electric',
        zeroToHundred: 2,
        price: 135000,
        image: '/',
      },
      {
        name: 'Porsche Taycan',
        model: 'Turbo S',
        topSpeed: '260 km/h',
        engineType: 'Electric',
        zeroToHundred: 2,
        price: 185000,
        image: '/',
      },
      {
        name: 'Lucid Air',
        model: 'Grand Touring',
        topSpeed: '270 km/h',
        engineType: 'Electric',
        zeroToHundred: 3,
        price: 155000,
        image: '/',
      },
      {
        name: 'BMW i4',
        model: 'M50',
        topSpeed: '225 km/h',
        engineType: 'Electric',
        zeroToHundred: 3,
        price: 68000,
        image: '/',
      },
      {
        name: 'Audi e-tron GT',
        model: 'RS',
        topSpeed: '250 km/h',
        engineType: 'Electric',
        zeroToHundred: 3,
        price: 143000,
        image: '/',
      },
      {
        name: 'Mercedes EQS',
        model: '580 4MATIC',
        topSpeed: '210 km/h',
        engineType: 'Electric',
        zeroToHundred: 4,
        price: 125000,
        image: '/',
      },
    ],
  });
}
seed().then(() => prisma.$disconnect());
