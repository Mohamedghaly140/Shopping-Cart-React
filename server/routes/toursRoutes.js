const express = require("express");

const router = express.Router();

// import controllers
const { getTours } = require("../controllers/toursController"); // Tours Controllers

router.get("/", getTours);

module.exports = router;
