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
      name: String!
      age: Int
    }
`);

module.exports = schema;
