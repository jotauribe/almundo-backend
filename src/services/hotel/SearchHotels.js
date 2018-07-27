const hotelList = require('../../data/hotels');

module.exports = () => ({
  withName: function(name) {
    const regex = new RegExp(name, 'ig');

    if (isDefined(name))
      this.criteria = hotel =>
        regex.test(hotel.name) && (this.criteria(hotel) || true);

    return this;
  },
  withStars: function({ from, to }) {
    const lowerLimit = from;
    const upperLimit = to;

    if (isDefined(lowerLimit) || isDefined(upperLimit))
      this.criteria = hotel =>
        hotel.stars >= lowerLimit &&
        hotel.stars <= upperLimit &&
        (this.criteria(hotel) || true);

    return this;
  },
  execute: function() {
    const hotels = [];

    hotelList.forEach(hotel => {
      if (this.criteria(hotel)) hotels.push(hotel);
    });

    return hotels;
  }
});

function isDefined(value) {
  return value !== null || value !== undefined;
}
