'use strict';

const BookModel = require('../models/book');

async function getBooks(request, response, next) {
  try {
    const books = await BookModel.find({});
    response.status(200).send(books);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

const deleteBook = async (request, response, next) => {
  try {
    await BookModel.findByIdAndDelete(request.params.id);
    response.status(204);

  } catch (error) {
    error.customMessage = 'Something went wrong with deleting your book!'
    console.error(error.customMessage + error);
    next(error);
  }
};

module.exports = { getBooks, deleteBook };
