const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
 
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserProfile', // Reference to the UserProfile model
  },
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
