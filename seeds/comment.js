
const { Comment } = require('../models');

const commentData = [
  {
    "user_id": 1,
    "post_id": 1,
    "comment": "I agree"
  },
  {
    "user_id": 2,
    "post_id": 2,
    "comment": "I dont agree"
  },
  {
    "user_id": 3,
    "post_id": 3,
    "comment": "I dont care"
  }
]

const seedComment = () => Comment.bulkCreate(commentData, {
    individualHooks: true
});

module.exports = seedComment;