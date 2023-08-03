import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'node:fs';
const typeDefs = readFileSync('./schema.gql', 'utf8');
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
// const typeDefs = `#graphql
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
//   # This "Book" type defines the queryable fields for every book in our data source.
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
const posts = {
    posts: [
        {
            id: 1,
            title: 'My First Post',
            author: {
                firstName: 'John',
                lastName: 'Doe',
            },
        },
        {
            id: 2,
            title: 'Another Post',
            author: {
                firstName: 'Jane',
                lastName: 'Doe',
            },
        },
        {
            id: 3,
            title: 'A New Article',
            author: {
                firstName: 'Jack',
                lastName: 'Smith',
            },
        },
    ],
};
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        Post: () => {
            return 'test';
            // Return all posts from your data source
        },
    },
    Author: {
        firstName: (parent) => parent.firstName,
        lastName: (parent) => parent.lastName,
        posts: (parent) => {
            return [];
            // Return parent's posts from data source, optionally filtering by title
        },
    },
    Post: {
        author: (parent) => parent.author,
        title: (parent) => parent.title,
    },
};
// const resolvers = {
//   Query: {
//     posts: () => books,
//   },
// };
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`🚀 Server listening at: ${url}`);
