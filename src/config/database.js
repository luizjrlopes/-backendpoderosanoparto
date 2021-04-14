const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/poderosa'
mongoose.connect(url, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
mongoose.Promise = global.Promise;
module.exports = mongoose