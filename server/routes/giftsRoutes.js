const express = require("express");

const router = express.Router();

// import controllers
const { getGifts } = require("../controllers/giftsController"); // Gifts Controllers

router.get("/", getGifts);

module.exports = router;
