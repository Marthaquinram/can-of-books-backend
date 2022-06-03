
'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_CONNECT);
const BookModel = require('./models/book');


async function seedBooks() {
  console.log('seeding books...');

  await BookModel.create({
    title: 'Healing Your Lost Inner Child',
    description: 'In Healing Your Lost Inner Child, Psychotherapist and Reiki master Robert Jackman takes you on a personal journey to explore unresolved wounds from your early life using the HEAL process for healing and embracing an authentic life. Through stories and exercises, this easy-to-read book will encourage you to learn how to stop giving in to your wounded inner childs emotional pain frozen inside a snow globe within you. Each chapter gently takes you closer to this original wounding so you can acknowledge and finally heal your pain. Move from being an impulsive reactor to an authentic, conscious creator in your life.',
    status: 'Healing yourself',
  });

  await BookModel.create({
    title: 'The High 5 Habit',
    description: 'The High 5 Habit is a simple yet profound tool that changes your attitude, your mindset, and your behavior. So be prepared to laugh and learn as you take steps to immediately boost your confidence, happiness, and results.',
    status: 'Healing yourself',
  });

  await BookModel.create({
    title: 'The Shining',
    description: 'Jack Torrance’s new job at the Overlook Hotel is the perfect chance for a fresh start. As the off-season caretaker at the atmospheric old hotel, he’ll have plenty of time to spend reconnecting with his family and working on his writing. But as the harsh winter weather sets in, the idyllic location feels ever more remote . . . and more sinister. And the only one to notice the strange and terrible forces gathering around the Overlook is Danny Torrance, a uniquely gifted five-year-old.',
    status: 'CHILLING STORIES',
  });
  await BookModel.create({
    title: 'Midnight Sun',
    description: 'This unforgettable tale as told through Edwards eyes takes on a new and decidedly dark twist. Meeting Bella is both the most unnerving and intriguing event he has experienced in all his years as a vampire. As we learn more fascinating details about Edwards past and the complexity of his inner thoughts.',
    status: 'My Personal Favs',
  });


  mongoose.disconnect();
  console.log('done seeding!');
}

seedBooks();
