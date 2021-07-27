const express = require("express");

const router = express.Router();

// import controllers
const { getBrands } = require("../controllers/brandsController"); // Brands Controllers

router.get("/", getBrands);

module.exports = router;
