const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Sudokus extends Model {}

Sudokus.init(
  {
    answerKey: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    startPoint: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.STRING(9500),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Sudokus",
  }
);

module.exports = Sudokus;
