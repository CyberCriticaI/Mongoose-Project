const Bike = require('../controllers/bikeController')
const express = require ('express')
// const router = express.Router()
// I am the routes file for Bikes.... my job is to route all different actions that pertain to the Bike model && link them to a route


// THIS IS WHERE CRUD LIVES
// -----> Create a bike? Where can I go? methods()?
const createBike = async() => {}
// -----> Read a bike? Where can I go? methods()?
const readBike = async() => {}
// Find a Specific Bike {:id}
const findABike = async() => {}
// -----> Update a bike? Where can I go? methods()?
const updateBike = async() => {}
// -----> Delete a bike? Where can I go? methods()?
const deleteBike = async() => {}

module.exports = { createBike, readBike, updateBike, deleteBike }