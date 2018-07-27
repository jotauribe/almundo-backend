const hotelService = require('../services/hotel');

exports.gethotels = function(req, res, next) {
  return res.status(200).json({
    hotels: data
  });
};

exports.gethotel = function(req, res, next) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === req.params.id) {
      return res.status(200).json({
        hotel: data[i]
      });
    }
  }

  return res.status(500).json({
    response: 'No se ha encontrado el hotel especificado'
  });
};

exports.getHotelsByStars = function(req, res, next) {
  try {
    const { stars } = re.query;
  } catch (error) {
    next(error);
  }
  var hotels = [];
};
