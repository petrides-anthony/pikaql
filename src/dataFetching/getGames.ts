import axios, { AxiosResponse } from 'axios';

const gameEndpoint = 'https://api.igdb.com/v4/games/?search=zelda&fields=id,name';
const access_token = 'Bearer g4w6duip0imczb8600p7x7s3lcp1im';
const client_id = 'gpss28az530yefemhe3otsr5k2q56p';

async function getGames() {

  const res = await axios.get<any, AxiosResponse<any[]>>(`${gameEndpoint}`, {
    headers: {
      'Client-ID': `${client_id }`,
      'Authorization': `${access_token}`
    }
  })
  .then((res) => {
    console.log(res.data)
  })
  .catch((error) => {
    console.error(error)
  });
}

getGames();
