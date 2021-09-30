import { gql } from 'apollo-server';

const query = gql`
  type Query {
    games(gameTitle: String!): [Game]
  }
`;

export { query };