

'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const getBooks = require('./modules/handlers');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

const mongoose = require('mongoose');
// making a database called cats-database
// connecting to our mongo DB hosted on Atlas
mongoose.connect(process.env.MONGODB_CONNECT);

// this is creating an instance of the mongoDB connection and assigning it to a variable
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// this is our success message from mongo!
db.once('open', function() {
  console.log('Mongoose is connected to Atlas!');
});

app.get('/books', getBooks);
app.get('/test', (request, response) => {
  response.send('test request received');
});

app.use((error, request, response, next ) =>{
  response.status(500).send(`My Bad! ERROR occurred in the server! Someone call the Developer... ${error.message}`);
});


//this will always be the last line of code.
app.listen(PORT, () => console.log(`listening on ${PORT}`));
