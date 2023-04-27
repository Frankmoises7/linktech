require('dotenv').config()

module.exports = {
  mongodb: {
    URI: `mongodb+srv://${process.env.USERDB}:${process.env.PASSWORD}@cluster0.empmxhu.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,
  }
};
