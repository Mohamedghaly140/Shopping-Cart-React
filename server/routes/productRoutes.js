const express = require('express');

const router = express.Router();

// import controllers
const {
	getProducts,
	getProductById,
} = require('../controllers/productController'); // Products Controllers

router.get('/', getProducts);

router.get('/:pid', getProductById);

module.exports = router;
