const hotelList = require('../../data/hotels');

module.exports = () => ({
  withName: function(name) {
    const regex = new RegExp(name, 'gi');

    if (isDefined(name)) {
      const previousCriteria = this.criteria ? this.criteria : () => true;
      this.criteria = hotel =>
        regex.test(hotel.name) && previousCriteria(hotel);
    }

    return this;
  },
  withStars: function(stars) {
    if (isDefined(stars) && Array.isArray(stars) && stars.length > 0) {
      const previousCriteria = this.criteria ? this.criteria : () => true;

      this.criteria = hotel =>
        stars.includes(parseInt(hotel.stars)) && previousCriteria(hotel);
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
