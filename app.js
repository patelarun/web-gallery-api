const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const startDatabase = require('./database');
const expressPlayground = require('graphql-playground-middleware-express').default;
const resolvers = require('./resolvers');

const context = async req => {
  const db = await startDatabase();
  const { authorization: token } = req.headers;

  return { db, token };
};


const app = express();
app.use(
  '/graphql',
  cors(),
  graphqlHTTP(async req => ({
    schema,
    rootValue: resolvers,
    context: () => context(req),
    introspection: true,
  })),
);
app.get('/playground', expressPlayground({ endpoint: '/graphql' }));
app.listen(4000);

console.log(`🚀 Server ready at http://localhost:4000/graphql`);
