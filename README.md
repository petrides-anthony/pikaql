# pikaql
A graphql gateway for querying video game information.

## Get Started
1. `yarn`
2. `yarn start`
3. Your local playground should run at http://localhost:4000/ by default

## Sample Queries
The below example query allows you to query game information by passing in a game title as a variable.
```
query ExampleQuery($gameTitle: String!) {
  games(gameTitle: $gameTitle) {
    id
    name
  }
}

# Variables
{
  "gameTitle": "pokemon"
}
```


#### Resources
```
- https://dev.twitch.tv/console/apps/gpss28az530yefemhe3otsr5k2q56p
- https://api-docs.igdb.com/#about
- https://grantwinney.com/what-is-igdb-api-internet-game-database/ 
```