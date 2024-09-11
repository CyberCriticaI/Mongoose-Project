// Schema to define our data => BIKE
const mongoose = require ("mongoose")
// ------> why?

const bikeSchema = new mongoose.Schema({
    // what is a bike?
    numOfWheels: Number,
    color: String,
    pedals: Number
})
// ----> Because I need to create a Bike
// ----> ok, I created your bike.... but now what???
const Bike = mongoose.model("Bike", bikeSchema)

module.exports = Bike