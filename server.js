const PORT = process.env.PORT || 8000
// const axios = require('axios').default
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())

app.listen(PORT, () => console.log('running on port ' + PORT))

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// let exerciseSessionSchema = new mongoose.Schema({
//   description: {type: String, required: true},
//   duration: {type: Number, required: true},
//   date: { type: String, default: new Date().toDateString() }
// });

// let userSchema = new mongoose.Schema({
//   username: {type: String, required: true},
//   log: [exerciseSessionSchema]
// })

// let User = mongoose.model('User', userSchema)

let flightSchema = new mongoose.Schema({
  // original: { type: String, required: true },
  // short: { type: Number },
});

let Flight = mongoose.model("flight", flightSchema);

// testing
app.get("/flights", (req, res) => {
  Flight.find({}, (error, arrayOfFlights) => {
    if(!error) {
      res.json(arrayOfFlights)
      // console.log(arrayOfFlights)
    }
  });
});