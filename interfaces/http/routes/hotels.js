var express = require('express');
var router = express.Router();
var hotelService = require('../../../app/services/hotel');

router.get('/', function(req, res, next) {
  hotelService.gethotels(req, res, next);
});

router.get('/:id', function(req, res, next) {
  hotelService.gethotel(req, res, next);
});

router.get('/stars/:starsId', function(req, res, next) {
  hotelService.gethotelforstars(req, res, next);
});

module.exports = router;
