const express = require("express");

const router = express.Router();

// import controllers
const { getCategories } = require("../controllers/categoriesController"); // Categories Controllers

router.get("/", getCategories);

module.exports = router;
