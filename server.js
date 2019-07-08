const { GraphQLServer } = require("graphql-yoga");
const { resolvers } = require("./resolvers");
const typeDefs = "./schema.graphql";

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));
