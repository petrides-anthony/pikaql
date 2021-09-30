import getGames from '../dataFetching/getGames';

const gamesResolver = {
  Query: {
    games: (root: any, args: any, context: any) => {
      console.log('GamesResolver queried');
      return getGames(args.gameTitle);
    },
  }
};

export { gamesResolver };

/*
Try querying
```
# Write your query or mutation here
query ExampleQuery($gameTitle: String!) {
  games(gameTitle: $gameTitle) {
    id
    name
  }
}

# Variables
{
  "gameTitle": "zelda"
}
```
*/