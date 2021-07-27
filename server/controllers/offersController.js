const offers = require("../data/offers.json");

exports.getOffers = (req, res, next) => {
  res.status(200).json({
    message: `find all offers successfully`,
    offers: offers,
  });
};
