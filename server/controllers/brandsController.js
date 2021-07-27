const brands = require("../data/brands.json");

exports.getBrands = (req, res, next) => {
  res.status(200).json({
    message: `find all brands successfully`,
    brands: brands,
  });
};
