const mongoose = require("mongoose");
const Car = require("./car.model");
const db = {};
db.mongoose = mongoose;
db.car = Car;
module.exports = db;
