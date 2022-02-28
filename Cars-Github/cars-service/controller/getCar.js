const Car = require('../models/Car')

const getAllCar = (async (req, res) => {
    try {
        const allCar = await Car.find().limit(5)
        res.json(allCar)
    } catch (error) {
        res.json({ message: error })
    }
})

const filteredCar = (async (req, res) => {
    let { mpg, cylinder, displacement, hp, weight, acceleration, origin, arr } = req.query;
    let query = {};
    if (mpg != null) query.mpg = mpg;
    if (cylinder != null) query.cylinder = cylinder;
    if (displacement != null) query.displacement = displacement;
    if (hp != null) query.hp = hp;
    if (weight != null) query.weight = weight;
    if (acceleration != null) query.acceleration = acceleration;


    // console.log(req.query)
    console.log(query)

    try {
        const filterCar = await Car.find({
            $and: [
                { "MPG": { $gt: mpg[0], $lt: mpg[1] } },
                { "Cylinders": { $gt: cylinder[0], $lt: cylinder[1] } },
                { "Displacement": { $gt: displacement[0], $lt: displacement[1] } },
                { "Horsepower": { $gt: hp[0], $lt: hp[1] } },
                { "Weight": { $gt: weight[0], $lt: weight[1] } },
                { "Acceleration": { $gt: acceleration[0], $lt: acceleration[1] } },
            ]
        }).limit(21)
        res.json(filterCar)

    } catch (error) {
        res.json({ message: error })
    }
})

module.exports = { getAllCar, filteredCar }


// localhost:7000/query?mpg=20&mpg=30&cylinder=4&cylinder=8&displacement=100&displacement=250&hp=100&hp=200&weight=2000&weight=5000&acceleration=10&acceleration=20