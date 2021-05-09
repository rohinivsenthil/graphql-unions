const candies = require('./data.json');

const resolvers = {

  CandyResult: {
    __resolveType(obj) {
      if (obj.restockDate) {
        return 'OutOfStock';
      }
      if (obj.availableRegions) {
        return 'RegionUnavailability';
      }
      if (obj.price) {
        return 'Candy';
      }
      return null;
    },
  },

  Query: {
    candy: (_, args) => candies.find((candy) => candy.id === args.id),
  },
};

module.exports = resolvers;
