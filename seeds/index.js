const seedSudoku = require('./sudoku-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedSudoku();

  process.exit(0);
};

seedAll();
