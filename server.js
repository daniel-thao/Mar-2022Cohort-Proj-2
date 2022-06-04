// Dependencies
const express = require("express");
const { engine } = require("express-handlebars");
const session = require(`express-session`);
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("./config/connection");
/*



*/
// =============================================================
// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;
/*



*/
// =============================================================
// Sets Handlebars as the default template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
/*



*/
// =============================================================
// Set up the store
const store = new SequelizeStore({
  db: sequelize,
  checkExpirationInterval:  5 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
  expiration: 15 * 60 * 1000, // The maximum age (in milliseconds) of a valid session. (ONE DAY = 24 * 60 * 60 * 1000)
});
/*



*/
// =============================================================
// Sets up the sessions with the 'secret', 'resave', 'saveUninitialized' options
app.use(
  session({
    secret: "mySecret",
    store: store,
    resave: false,
    saveUninitialized: false,
  })
);
/*



*/
// =============================================================
// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/*



*/
// =============================================================
// Static directory for the CSS and Javascript
app.use(express.static("public"));
/*



*/
// =============================================================
// Routes that the JS will be using
app.use(require("./routes"));
/*



*/
// =============================================================
// Makes sure that all tables in DB are up to date
async function dbSync() {
  // REMOVE THIS FORCE TRUE ON OFFICIAL DEPLOYMENT PROD
  // {force: true}
  return await sequelize.sync();
}
dbSync();
/*



*/
// =============================================================
// Starts the server to begin listening
app.listen(PORT, async () => {
  console.log("App listening on PORT " + PORT);
});


/*
    FRONTEND
      - Click the slashes
        - generates the purple that we see when at this URL localhost/1 (which is puzzle 1)

      - Be able to click the numbers inside the purple box
        - Once clicked, it hides away or deletes the purple box
        - Populates the specific slashed-box that we first clicked on

      - We also want to wire to the correct Route so that the Database also gets populated with the correct Data
        - Remember we had Puzzle-Progress table, so we want to update puzzle progress dataline related to the user



    BACKEND
      - create the route to the database

      - go into the correct table to change data
        - change the necessary data
        - make sure that the format stays the same

      - rerender a new landing page.handlebars with the new number that was selected by the user and inserted into the DB

*/
console.log("get rid of me")