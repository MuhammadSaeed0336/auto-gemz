const mongoose = require("mongoose");
const Car = require("./car.model");
const Feed = require("./feed.model");
const Rent = require("./rent.model");
const db = {};
db.mongoose = mongoose;
db.car = Car;
db.feed = Feed
db.rent=Rent
module.exports = db;
