const express = require('express')
const app = express();
const mongoose = require('mongoose')
require('dotenv/config')
const bodyParser = require('body-parser')
const cors = require('cors')

const carRoute = require('./routes/cars')

app.use(cors());
app.use(bodyParser.json())
app.use('/get-cars', carRoute)




app.get('/', (req, res,) => {
    res.send('cars');
})

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Connected to DB')
);

app.listen(7000)