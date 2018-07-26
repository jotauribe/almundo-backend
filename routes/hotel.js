var express = require('express');
var router = express.Router();
var hotel = require('../controller/hotels.controllers');


router.get('/', function(req, res, next) {
   hotel.gethotels(req, res, next);
});

router.get('/:id', function (req, res, next) {
   hotel.gethotel(req, res, next);
});

router.get('/stars/:starsId', function (req, res, next) {
    hotel.gethotelforstars(req, res, next);
});



module.exports = router;