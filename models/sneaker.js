////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const mongoose = require('./connection') // we imported mongoose here

const { Schema, model } = mongoose // destructuring, grabbing model and schema off mongoose variable

// make Sneakers schema
const sneakerSchema = new Schema({
  model: String,
  color: String,
  image: String,
  highTop: Boolean,
  username: String,
})

// make fruit model
const Sneaker = model("Sneaker", sneakerSchema)

module.exports = Sneaker