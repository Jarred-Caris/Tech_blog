
const { Post } = require('../models');

const postData = [
  {
    "title": "How do you make and Array",
    "description": "Im new to coding and cant get my Array to work. Help!!!",
    "user_id": 1,
    "id":1
  },
  {
    "title": "The Ultimate Tech Quiz",
    "description": "A web app that will give users 10 new technical questions each day and track their progress in things like programming, cybersecurity, database architecture, and more!",
    "user_id": 2,
    "id":2
  },
  {
    "title": "HTML shorthcut",
    "description": "Did you know you can use a ! to enter a html template? Life Saver!!",
    "user_id": 3,
    "id":3
  }
]

const seedPost = () => Post.bulkCreate(postData, {
    individualHooks: true
});

module.exports = seedPost;



