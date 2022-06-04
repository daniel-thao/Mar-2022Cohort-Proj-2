const router = require("express").Router();
const db = require("../../models");
const { sudoku } = require("./controller");


router.get("/", (req, res) => {
  // await sudoku.findOne();
  // res.send/("HELLO WORLD");
});

module.exports = router;
