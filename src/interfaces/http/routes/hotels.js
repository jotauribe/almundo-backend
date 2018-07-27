var express = require('express');
var router = express.Router();
var { hotelService } = require('../../../services');

router.get('/', function(req, res, next) {
  try {
    const { name, minStars, maxStars } = req.query;
    console.log('HOLA PAPI');

    const hotelSearch = hotelService.searchHotels();

    result = hotelSearch
      .withName(name)
      .withStars({ from: minStars, to: maxStars });

    res.send(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
