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
