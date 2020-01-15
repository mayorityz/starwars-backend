const express = require("express");
const bodyParser = require("body-parser");
const db = require("./util/database").mongoConnect;
const app = express();

const filmsRoute = require("./routes/films");
const mostAppearanceRoute = require("./routes/person");

app.use(bodyParser.json());

app.use(filmsRoute);
app.use(mostAppearanceRoute);

db(() => {
  console.log("Listening ...");
  app.listen(8080);
});
