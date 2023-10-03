import React, { useState } from 'react';
import styles from '../Blog/styles.module.css';
import axios from 'axios';

const BlogForm = ({ onSubmit, className }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      // Handle validation or show an error message
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/blog', {
        title,
        content,
      });

      if (response.status === 201) {
        console.log('Blog post created successfully');
        setSuccessMessage('Blog posted!');
        // You can redirect the user to a success page or perform any other action here
      }
    } catch (error) {
      console.error('Error creating blog post:', error);
      // You can show an error message to the user or perform error handling as needed
    }
  };

  return (
    <div>
      {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
      <form className={`${styles.blog_form} ${className}`} onSubmit={handleSubmit}>
        <h2 className={styles.form_title}>Create a New Blog</h2>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={handleTitleChange}
          className={`${styles.input} ${styles.input_wide}`}
        />
        <textarea
          placeholder="Content"
          name="content"
          value={content}
          onChange={handleContentChange}
          className={`${styles.input} ${styles.input_wide} ${styles.textarea}`}
        ></textarea>
        <button type="submit" className={`${styles.green_btn} ${styles.btn}`}>
          Post
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
