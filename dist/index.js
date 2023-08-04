"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const node_fs_1 = require("node:fs");
const resolver_1 = require("./resolver");
const typeDefs = (0, node_fs_1.readFileSync)('./dist/schema.gql', 'utf8');
async function start() {
    const server = new server_1.ApolloServer({
        typeDefs,
        resolvers: resolver_1.resolvers,
    });
    const PORT = parseInt(process.env.PORT || '4001');
    // const { url } = await startStandaloneServer(server, {
    //   listen: { port: PORT },
    //   context: buildContext,
    // });
    // console.log(`Server is running at ${url}`);
}
// start();
// const typeDefs = readFileSync('./dist/schema.gql', 'utf8');
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
// const typeDefs = `#graphql
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
//   # This "Book" type defines the queryabl  e fields for every book in our data source.
//   type Book {
//     title: String
//     author: String
//   }
//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     books: [Book]
//   }
// `;
// const posts = [
//   {
//     id: 1,
//     title: 'My First Post',
//     author: {
//       id: 1,
//       firstName: 'John',
//       lastName: 'Doe',
//     },
//   },
//   {
//     id: 2,
//     title: 'Another Post',
//     author: {
//       id: 1,
//       firstName: 'Jane',
//       lastName: 'Doe',
//     },
//   },
//   {
//     id: 3,
//     title: 'A New Article',
//     author: {
//       id: 1,
//       firstName: 'Jack',
//       lastName: 'Smith',
//     },
//   },
// ];
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
// const resolvers: Resolvers = {
//   Query: {
//     posts: () => {
//       return posts;
//       // Return all posts from your data source
//     },
//   },
//   Author: {
//     firstName: (parent) => parent.firstName,
//     lastName: (parent) => parent.lastName,
//   },
//   Post: {
//     author: (parent) => parent.author,
//     title: (parent) => parent.title,
//   },
// };
// const resolvers = {
//   Query: {
//     posts: () => books,
//   },
// };
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });
// // Passing an ApolloServer instance to the `startStandaloneServer` function:
// //  1. creates an Express app
// //  2. installs your ApolloServer instance as middleware
// //  3. prepares your app to handle incoming requests
// const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
// console.log(`🚀 Server listening at: ${url}`);
