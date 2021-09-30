import { gql } from 'apollo-server';

interface Game {
  id: string;
  name: string;
  summary: string;
}

const gameType = gql`
  type Game {
    id: ID!
    name: String!
    summary: String!
  }
  `;

export { gameType, Game };