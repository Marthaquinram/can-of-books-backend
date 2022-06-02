
'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_CONNECT);
const BookModel = require('./models/book');


async function seedBooks() {
  console.log('seeding books...');

  await BookModel.create({
    title: 'The Silent Patient',
    description: 'a women may or may not have killed her husband and a therapist is determind to make her talk to discover her secrets.',
    status: 'My Personal Favs',
  });

  await BookModel.create({
    title: 'The Silent Patient',
    description: 'a women may or may not have killed her husband and a therapist is determind to make her talk to discover her secrets.',
    status: 'In your Feels',
  });

  await BookModel.create({
    title: 'The Silent Patient',
    description: 'a women may or may not have killed her husband and a therapist is determind to make her talk to discover her secrets.',
    status: 'In your Feels',
  });
  await BookModel.create({
    title: 'The Silent Patient',
    description: 'a women may or may not have killed her husband and a therapist is determind to make her talk to discover her secrets.',
    status: 'CHILLING STORIES',
  });


  mongoose.disconnect();
  console.log('done seeding!');
}

seedBooks();
