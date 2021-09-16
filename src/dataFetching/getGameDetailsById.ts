import axios, { AxiosResponse } from 'axios';

const access_token = 'Bearer g4w6duip0imczb8600p7x7s3lcp1im';
const client_id = 'gpss28az530yefemhe3otsr5k2q56p';

const game_id = '1026'
const game_endpoint = `https://api.igdb.com/v4/games/${game_id}?fields=id,name,url,summary,storyline,websites`;

async function getGameDetailsById() {

  const res = await axios.get<any, AxiosResponse<any[]>>(`${game_endpoint}`, {
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

getGameDetailsById();
