
'use strict';

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
 title: {type: String, required: true},
  // title: String,
  // description: String,
  // status: String
  description: {type: String, required: true},
    status: {type: String, enum: ['My Personal Favs', 'In your Feels', 'CHILLING STORIES', 'Healing yourself']},
});
// tite: String
// color: String

// use schema to craft a book model
const bookModel = mongoose.model('book', bookSchema);

module.exports = bookModel;
