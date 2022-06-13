'use strict';

//required AKA imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { getBooks, deleteBook, updatedBook, handleGetUser } = require('./modules/handlers');
const verifyUser = require('./modules/auth');


//mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_CONNECT);
// this is creating an instance of the mongoDB connection and assigning it to a variable
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// this is our success message from mongo!
db.once('open', function () {
  console.log('Mongoose is connected to Atlas!');
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(verifyUser);

const PORT = process.env.PORT || 3002;

app.get('/test', (request, response) => {
  response.send('test request received');
});


//routes AKA end points
 app.get('/books', getBooks); //will be refactored
// app.get('/books', async (request, response) => {
//   const books = await bookModel.find({});
//   response.send(books);
// });
app.delete('/books/:id', deleteBook);
app.put('/books/:id', updatedBook);
app.get('/user', handleGetUser);


// create a book -- this bit from demo
app.post('/books', async (request, response) => {
  const { title, description, status } = request.body;
  const newBook = await bookModel.create({ title, description, status });
  response.send(newBook);
});



// making a database called cats-database
const bookModel = require('./models/book');

//error handling middleware, must be last app.use().
app.use((error, request, response, next) => {
  response.status(500).send(`My Bad! ERROR occurred in the server! Someone call the Developer... ${error.message}`);
});

//this will always be the last line of code.
app.listen(PORT, () => console.log(`listening on ${PORT}`));
