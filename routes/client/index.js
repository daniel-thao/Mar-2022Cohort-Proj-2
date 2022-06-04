const router = require("express").Router();
const { sudoku } = require("../api/controller");

router.get("/", (req, res) => {
  if (req.session.countVisit) {
    // If the 'countVisit' session variable exists, increment it by 1 and set the 'firstTime' session variable to 'false'
    req.session.countVisit++;
    req.session.firstTime = false;
  } else {
    // If the 'countVisit' session variable doesn't exist, set it to 1 and set the 'firstTime' session variable to 'true'
    req.session.countVisit = 1;
    req.session.firstTime = true;
  }

  const initData = {
    countVisit: req.session.countVisit,
    firstTime: req.session.firstTime,
    allPuzzles: req.session.allPuzzles ? req.session.allPuzzles : "",
    user: req.session.user ? req.session.user : "",
    errorData: req.session.errorData ? req.session.errorData : "",
  };

  res.render("landing", initData);
});

router.get("/:id", async (req, res) => {
  await sudoku.findOne(req, res);
  // console.log(req.session.sudoku);

  const initData = {
    user: req.session.user ? req.session.user : false,
    allPuzzles: req.session.allPuzzles ? req.session.allPuzzles : "",
    sudoku: req.session.sudoku ? req.session.sudoku : "",
    errorData: req.session.errorData,
  };

  // console.log(req.session.id)
  res.render("landing", initData);
});

module.exports = router;
