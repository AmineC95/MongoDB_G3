const mongoose = require("mongoose");
let db = mongoose.connect('mongodb://localhost:27017/ecommerce');

module.exports = db;