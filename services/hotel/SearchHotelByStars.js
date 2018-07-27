const data = require('../data/hotels');

module.exports = function({ equalsOrGreaterThan, equalsOrLessThan }) {
  const hotels = [];

  data.forEach(hotel => {
    if (hotel.stars >= equalsOrGreaterThan && hotel.stars <= equalsOrLessThan)
      hotels.push(hotel);
  });

  return hotels;
};
