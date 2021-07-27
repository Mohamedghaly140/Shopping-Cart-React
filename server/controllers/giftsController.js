const gifts = require("../data/gifts.json");

exports.getGifts = (req, res, next) => {
  res.status(200).json({
    message: `find all gifts successfully`,
    gifts: gifts,
  });
};
