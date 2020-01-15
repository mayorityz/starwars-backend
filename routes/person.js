const express = require("express");
const router = express.Router();

const personController = require("../controllers/person");

router.get("/most-appearance", personController.FetchPerson);

module.exports = router;
