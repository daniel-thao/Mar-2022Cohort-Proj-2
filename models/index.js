const Users = require("./users");
const Sudokus = require("./sudokus");
const PuzzleProgress = require("./puzzle-progress");

Users.belongsToMany(Sudokus, { through: PuzzleProgress });
Sudokus.belongsToMany(Users, { through: PuzzleProgress });

module.exports = {
  Users,
  Sudokus,
  PuzzleProgress,
};
