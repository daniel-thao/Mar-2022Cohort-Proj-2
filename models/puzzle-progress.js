const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class PuzzleProgress extends Model {}

PuzzleProgress.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    isFinished: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    currentValue: {
      type: DataTypes.JSON,
    },
  },
  {
    sequelize,
    tableName: "Puzzle_Progress",
  }
);

module.exports = PuzzleProgress;
