const { MongoClient } = require('mongodb');

let database = null;

async function startDatabase() {
  if (!db) {
    const options = { sslValidate: false, keepAlive: 1, connectTimeoutMS: 5000, useNewUrlParser: true, useUnifiedTopology: true };
    const client = await MongoClient.connect(process.env.MONGOLAB_URI, options);
    const databaseName = process.env.MONGOLAB_URI.substr(process.env.MONGOLAB_URI.lastIndexOf('/') + 1);
    db = client.db(databaseName);
  }
  return db;
}

module.exports = startDatabase;
