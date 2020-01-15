const express = require("express");
const router = express.Router();

const filmsController = require("../controllers/films");

router.get("/films", filmsController.FetchFilms);

module.exports = router;
