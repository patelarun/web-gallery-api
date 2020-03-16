const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type User {
      id: ID!
      email: String!
      name: String
      createdAt: String
    }

    type Post {
      id: ID!
      title: String!
      url: Int
    }

    type Query {
      posts: [Post!]!
      users: [User!]!
   }

   type Mutation {
     createPost(id: Int!, title: String!, url: String!): Post!
     me: User!
   }

`);

module.exports = schema;
