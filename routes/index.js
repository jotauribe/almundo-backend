const express = require('express');
const router = express.Router();
const hotelRouter = require('./hotel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hotels API' });
});

router.use;

module.exports = router;
