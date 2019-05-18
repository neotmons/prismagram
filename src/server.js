import "./env.js";

import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
// import passport from "passport";
import schema from "./schema";
import "./passport"
import { authenticateJwt } from "./passport";
import { isAutehnticated } from "./middlewares";


const PORT = process.env.PORT || 4000;
const server = new GraphQLServer({ 
  schema, 
  context: ({ request }) => ({request, isAutehnticated})
});

server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () =>
  console.log(`Server running on http://localhost:${PORT}`));