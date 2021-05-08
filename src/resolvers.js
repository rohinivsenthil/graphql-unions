const books = require('./data.json');

const resolvers = {
  Query: {
    books: () => books,
  },
};

module.exports = resolvers;
