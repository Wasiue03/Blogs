const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogPost'); // Import your blog post model

// POST endpoint to create a new blog post
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;

    // Create a new blog post
    const newBlogPost = new BlogPost({
      title,
      content,
    });

    // Save the blog post to the database
    await newBlogPost.save();

    res.status(201).json({ message: 'Blog post created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET endpoint to fetch all blog posts
router.get("/", async (req, res) => {
  try {
    // Fetch all blog posts from the database and populate the 'user' field with user profiles
    const blogPostsWithUsers = await BlogPost.find().populate('user', 'name profilePicture');

    res.json(blogPostsWithUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
