const tours = require("../data/tours.json");

exports.getTours = (req, res, next) => {
  res.status(200).json({
    message: `find all tours successfully`,
    tours: tours,
  });
};
