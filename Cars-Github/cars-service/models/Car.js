const mongoose = require('mongoose')

const CarsSchema = mongoose.Schema({
    Car: {
        type: String
    },
    MPG: {
        type: Number
    },
    Cylinders: {
        type: Number
    },
    Displacement: {
        type: Number
    },
    Horsepower: {
        type: Number
    },
    Weight: {
        type: Number
    },
    Acceleration: {
        type: Number
    },
    Model: {
        type: Number
    },
    Origin: {
        type: String
    }
})

module.exports = mongoose.model('Cars', CarsSchema)