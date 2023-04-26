const mongoose = require('mongoose');
const { mongodb } = require('./keys');


const uri = `mongodb+srv://${process.env.USERDB}:${process.env.PASSWORD}@cluster0.empmxhu.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
const option = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(uri, option)
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log('error db:', e))
