import { query } from './query';
import { postType, userType, addressType, companyType, geoLocationType, gameType } from './types';

const typeDefs = [query, postType, userType, addressType, companyType, geoLocationType, gameType];

export { typeDefs };