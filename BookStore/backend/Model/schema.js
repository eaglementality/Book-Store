const mongoose = require('mongoose');
//schema
const bookSchema = new mongoose.Schema({
    bookId:String,
    bookImage:String,
    title: String,
    author: String,
    description: String,
    price:String,
    category: String
});
//model
module.exports = mongoose.model('Books',bookSchema);

