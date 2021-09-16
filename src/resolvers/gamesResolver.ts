import getGames from '../dataFetching/getGames';

const gamesResolver = {
  Query: {
    games: (root: any, args: any, context: any) => {
      console.log('Games queried');
      return getGames();
    },
  }
};

export { gamesResolver };

/*
Try querying
```
# Write your query or mutation here
query Games {
  games {
    userId
    id
    title
    body
  }
} 
```
*/