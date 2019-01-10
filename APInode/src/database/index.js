const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/cubo', { useMongoClient: true })
mongoose.Promise = global.Promise

module.exports = mongoose