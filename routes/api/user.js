const router = require("express").Router();
const { default: axios } = require("axios");
const db = require("../../models");
const { sudoku } = require("./controller");


// Routes
// =============================================================

router.get("/", async (req, res) => {
  const userData = await db.Users.findAll();
  res.json(userData);
});
/*






*/
router.post("/create", async (req, res) => {
  await db.Users.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then(async (data) => {
      // Set the user's email to the session user
      req.session.user = data.dataValues.email;

      // ====================================
      const test  = await sudoku.allPuzzleIDAndDifficulty(req, res);
      // console.log(test)
      return res.json(test);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
        const errorData = [];
        err.errors.map((index) => errorData.push(index.message));
        req.session.errorData = { createAcc: errorData };
        return res.send(false);
      }
    });

  //   go into db and make user and then send user data to session to populate the client
});
/*






*/
router.post("/login", async (req, res) => {
  

  const validUser = await db.Users.findOne({ where: { email: req.body.email } });

  if (!validUser) {
    req.session.errorData = { login: "Your Email or Password is incorrect" };
    return res.send(false);
  }

  // otherwise check the password
  const validPassword = await validUser.checkPassword(req.body.password);

  // if it is wrong, then send error
  if (!validPassword) {
    req.session.errorData = { login: "Your Email or Password is incorrect" };
    return res.send(false);
  }

  await sudoku.allPuzzleIDAndDifficulty(req, res);

  // otherwise, do this
  req.session.user = validUser.email;
  return res.send(true);

  //   go into db and make user and then send user data to session to populate the client
});

module.exports = router;
