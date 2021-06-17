const HttpError = require('../models/HttpError');

const products = require('../data/products.json');

exports.getProducts = (req, res, next) => {
	res.status(200).json({
		message: `find all products successfully`,
		products: products,
	});
};

exports.getProductById = (req, res, next) => {
	const productId = req.params.pid;

	let product;

	try {
		product = products.find(prod => prod.id === +productId);

		if (!product) {
			return next(
				new HttpError(
					`Could not find a product for the provided id ${productId}..`,
					404
				)
			);
		}
	} catch (err) {
		return next(
			new HttpError('Something went wrong, could not find a product', 500)
		);
	}

	res.status(200).json({
		message: `find successfully product with id ${productId}`,
		product,
	});
};
