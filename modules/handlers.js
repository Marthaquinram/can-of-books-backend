'use strict';

const BookModel = require('../models/book');

async function getBooks(request, response, next) {
  try {
    const books = await BookModel.find({email: request.user.email});
    response.status(200).send(books);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

const deleteBook = async (request, response, next) => {
  try {

    const bookToBeDeleted = await BookModel.findOne({_id: request.params.id,email: request.user.email});
    if (!bookToBeDeleted) response.status(404).send('Unable to find that book to delete');
    else {
      await BookModel.findByIdAndDelete(request.params.id);
      response.status(200).send('Book was sucessfully deleted');
    }
  } catch (error) {
    error.customMessage = 'Something went wrong with deleting your book!';
    console.error(error.customMessage + error);
    next(error);
  }
};

let updatedBook = async (request, response, next) => {
  try {
    const updatedBook = await BookModel.findByIdAndUpdate(request.params.id, request.body, {new: true});
    response.status(200).send(updatedBook);

  } catch (error) {
    error.customMessage = 'Something went wrong with updating your book!';
    console.error(error.customMessage + error);
    next(error);
  }
};

let handleGetUser = async (request,response) => {
  console.log('Getting the user');
  response.send(request.user);
};

module.exports = { getBooks, deleteBook, updatedBook, handleGetUser };
