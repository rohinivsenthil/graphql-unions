const { gql } = require('apollo-server');

const typeDefs = gql`
  type Candy {
    id: String!
    name: String
    price: Float
  }

  type Query {
    candies(id: String!): Candy
  }
`;

module.exports = typeDefs;
