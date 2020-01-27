const express = require("express");
const router = express.Router();

const newAccountController = require("../controllers/newAccount");

router.post("/newaccount", newAccountController.newUser);

module.exports = router;
