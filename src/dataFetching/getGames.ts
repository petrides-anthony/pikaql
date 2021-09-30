import axios, { AxiosResponse } from 'axios';
import { Game } from '../typeDefs/types';

const access_token = 'Bearer g4w6duip0imczb8600p7x7s3lcp1im';
const client_id = 'gpss28az530yefemhe3otsr5k2q56p';

async function getGames(gameTitle: string = 'mario' ): Promise<Game[]> {

  // const game_title = 'zelda'
  const game_endpoint = `https://api.igdb.com/v4/games/?search=${gameTitle}&fields=id,name,summary`;

  const res = await axios.get<any, AxiosResponse<Game[]>>(`${game_endpoint}`, {
    headers: {
      'Client-ID': `${client_id }`,
      'Authorization': `${access_token}`
    }
  });
  
  return res.data;
}

export default getGames;
