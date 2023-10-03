const express = require('express');
const router = express.Router();
const multer = require('multer'); // Multer for handling file uploads
const UserProfile = require('../models/userProfile'); // Import your user profile model

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'userProfiles/'); // Adjust the folder path as needed
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

router.post('/', upload.single('profilePicture'), async (req, res) => {
  try {
    const { name, description } = req.body;
    const profilePicture = req.file ? req.file.path : '';

    // Create a new user profile
    const newUserProfile = new UserProfile({
      name,
      description,
      profilePicture,
    });

    // Save the user profile to the database
    await newUserProfile.save();

    res.status(201).json({ message: 'User profile created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
