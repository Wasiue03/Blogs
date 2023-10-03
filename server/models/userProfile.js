const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('UserProfile', userProfileSchema);
