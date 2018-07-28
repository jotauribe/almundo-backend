var express = require('express');
var router = express.Router();
var { hotelService } = require('../../../services');

router.get('/', function(req, res, next) {
  try {
    const { name, minStars, maxStars } = req.query;
    console.log('HOLA PAPI', name, minStars, maxStars);

    const hotelSearch = hotelService.searchHotels();
    console.log(hotelSearch);

    result = hotelSearch
      .withName(name)
      .withStars({ from: minStars, to: maxStars })
      .execute();

    res.send(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
