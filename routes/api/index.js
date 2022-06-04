const router = require("express").Router();

router.use("/user", require("./user"));
router.use("/sudoku", require("./sudoku"));
router.use("/test", require("./test"));

module.exports = router