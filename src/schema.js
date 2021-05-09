const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type Candy {
    id: String!
    name: String
    price: Float
  }

  type OutOfStock {
    restockDate: Date
  }

  type RegionUnavailability {
    availableRegions: [String!]
  }

  union CandyResult = Candy | OutOfStock | RegionUnavailability

  type Query {
    candy(id: String!): CandyResult
  }
`;

module.exports = typeDefs;
