const hotelList = require("../../data/hotels");

module.exports = () => ({
  withName: function(name) {
    const regex = new RegExp(name, "gi");

    if (isDefined(name)) {
      const previousCriteria = this.criteria ? this.criteria : () => true;
      this.criteria = hotel =>
        regex.test(hotel.name) && previousCriteria(hotel);
    }

    return this;
  },
  withStars: function({ from, to }) {
    const lowerLimit = from;
    const upperLimit = to;

    if (isDefined(lowerLimit) && isDefined(upperLimit)) {
      const previousCriteria = this.criteria ? this.criteria : () => true;

      this.criteria = hotel =>
        hotel.stars >= lowerLimit &&
        hotel.stars <= upperLimit &&
        previousCriteria(hotel);
    }

    return this;
  },
  execute: function() {
    if (!this.criteria) return hotelList;

    const result = [];

    hotelList.forEach(hotel => {
      if (this.criteria(hotel)) result.push(hotel);
    });

    return result;
  }
});

function isDefined(value) {
  return value !== null && value !== undefined;
}
