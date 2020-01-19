const express = require("express");
const bodyParser = require("body-parser");
const db = require("../util/database").mongoConnect;
const app = express();

const filmsRoute = require("../routes/films");
const mostAppearanceRoute = require("../routes/person");
const speciesRoute = require("../routes/species");

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Header", "Content-Type, Authorization");
  next();
});

app.use(filmsRoute);
app.use(mostAppearanceRoute);
app.use(speciesRoute);

// catch undefined routes and respond with 404
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

// catch server errors and respond with 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

db(status => {
  console.log(status);
});

module.exports = app;
