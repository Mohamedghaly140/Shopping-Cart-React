const categories = require("../data/all-categories.json");

exports.getCategories = (req, res, next) => {
  res.status(200).json({
    message: `find all categories successfully`,
    categories: categories,
  });
};
