const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    participation: {
        type: Number,
        required: true,
    },
})

const Data = mongoose.model('Data', DataSchema)