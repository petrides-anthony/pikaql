import { gql } from 'apollo-server';

interface Game {
  id: string;
  name: string;
}

const gameType = gql`
  type Game {
    id: ID!
    name: String!
  }
  `;

export { gameType, Game };