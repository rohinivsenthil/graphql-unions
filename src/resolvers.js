const candies = require('./data.json');

const resolvers = {
  Query: {
    candies: (_, args) => candies.find((candy) => candy.id === args.id),
  },
};

module.exports = resolvers;
