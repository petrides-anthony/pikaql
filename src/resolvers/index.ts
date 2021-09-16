import { postsResolver } from './postsResolver';
import { usersResolver } from './usersResolver';
import { authorResolver } from './authorResolver';
import { userPostsResolver } from './userPostsResolver';
import { gamesResolver } from './gamesResolver';

const resolvers = [postsResolver, usersResolver, authorResolver, userPostsResolver, gamesResolver];

export { resolvers };