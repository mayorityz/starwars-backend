const express = require("express");
const router = express.Router();

const speciesController = require("../controllers/species");

router.get("/species", speciesController.AllSpecies);

module.exports = router;
