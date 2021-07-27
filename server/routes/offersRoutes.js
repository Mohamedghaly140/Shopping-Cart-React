const express = require("express");

const router = express.Router();

// import controllers
const { getOffers } = require("../controllers/offersController"); // Offers Controllers

router.get("/", getOffers);

module.exports = router;
