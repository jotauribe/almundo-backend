var express = require('express');
var router = express.Router();
var { hotelService } = require('../../../services');

router.get('/', function(req, res, next) {
  try {
    const { name, stars } = req.query;

    const hotelSearch = hotelService.searchHotels();
    const starArray = stars ? stars.split(',').map(s => parseInt(s)) : [];

    result = hotelSearch
      .withName(name)
      .withStars(starArray)
      .execute();

    res.send(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
