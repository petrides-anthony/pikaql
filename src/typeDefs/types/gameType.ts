import { gql } from 'apollo-server';

interface Game {
  id: string;
  name: string;
  rating: string;
  summary: string;
  storyline: string;
}

const gameType = gql`
  type Game {
    id: ID!
    name: String!
    rating: String
    summary: String
    storyline: String
  }
  `;

export { gameType, Game };