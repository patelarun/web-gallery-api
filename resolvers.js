const isTokenValid = require('./authentication');

module.exports = {
  createPost: async ({ image, user }, context) => {
    try {
      const { db, token } = await context();
      const { error, decoded } = await isTokenValid(token);

      const posts = await db.collection('posts').find({ userId });
      return posts.toArray();
    } catch (err) {
      console.error(err);
    }
  },
  posts: async ({ userId, skip, size }, context) => {
    try {
      const { db, token } = await context();
      const { error, decoded } = await isTokenValid(token);

      const posts = await db.collection('posts').find({ userId });
      return posts.toArray();
    } catch (err) {
      console.error(err);
    }
  },
  users: async (_, context) => {
    try {
      const { db, token } = await context();
      const { error, decoded } = await isTokenValid(token);

      const users = await db.collection('users').findOne({ userId });
      return users.toArray();
    } catch (err) {
      console.error(err);
    }
  },
  me: async ({ user }, context) => {
    try {
      const { db, token } = await context();
      const { error, decoded } = await isTokenValid(token);

      const user = await db.collection('users').findOne({ emailAddress: user.email });
      if (!user) {
        const newUser = { name: user.name, email: user.email };
        await db.collection('users').insertOne(newUser);
      }
      return users.toObject();
    } catch (err) {
      console.error(err);
    }
  },
};
