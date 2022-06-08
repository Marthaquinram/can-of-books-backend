'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { getBooks, deleteBook } = require('./modules/handlers');


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;


const mongoose = require('mongoose');
const bookModel = require('./models/book');
// making a database called cats-database
// connecting to our mongo DB hosted on Atlas
mongoose.connect(process.env.MONGODB_CONNECT);

// this is creating an instance of the mongoDB connection and assigning it to a variable
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// this is our success message from mongo!
db.once('open', function () {
  console.log('Mongoose is connected to Atlas!');
});

app.get('/books', getBooks); //will be refactored
app.get('/test', (request, response) => {
  response.send('test request received');
});  TODO: //may have to refactor

app.use((error, request, response, next) => {
  response.status(500).send(`My Bad! ERROR occurred in the server! Someone call the Developer... ${error.message}`);
});

// lab12 card 1 starts here (add new route and handler function to respond to POST requests to /books


// all books
app.get('/books', async (request, response) => {
  const books = await bookModel.find({});
  response.send(books);
}); // TODO: may have to refactor


// create a book -- this bit from demo
app.post('/books', async (request, response) => {
  const { title, description, status } = request.body;
  const newBook = await bookModel.create({ title, description, status });
  response.send(newBook);
});

app.delete('/books/:id', deleteBook);

//this will always be the last line of code.
app.listen(PORT, () => console.log(`listening on ${PORT}`));
