const router = require("..");
const db = require("../../../models");

const findAll = async (req, res) => {
  return await db.Sudokus.findAll();
};
/*






*/
const allPuzzleIDAndDifficulty = async (req, res) => {
  const allPuzzles = await db.Sudokus.findAll();
  const data = allPuzzles.map((index) => {
    return {id: index.id, difficulty: index.difficulty};
  });

  req.session.allPuzzles = data;
  return data
};
/*






*/
const findOne = async (req, res) => {
  console.log(await db.Sudokus.findAll());
  const puzzle = await db.Sudokus.findOne({where: {id: req.params.id}})
  console.log(puzzle);
  req.session.sudoku = puzzle.dataValues.startPoint
  // console.log(puzzle.dataValues.startPoint);
  return puzzle;
}
/*






*/
module.exports = {
  findAll,
  allPuzzleIDAndDifficulty,
  findOne
};
