const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: String,
    description: String,
    prix: String,
    stock: String
});

const Product = mongoose.model("Product",commentSchema);


module.exports = Product;