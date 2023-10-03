import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css';

const Main = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch the user's blog posts when the component mounts
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('/api/blog/user'); // Adjust the API route as needed
        setBlogPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>fakebook</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <div className={styles.blogContainer}>
        <h2>Your Blog Posts</h2>
        {blogPosts.length > 0 ? (
          blogPosts.map((post) => (
            <div key={post._id} className={styles.blogPost}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))
        ) : (
          <p>No blog posts found.</p>
        )}
      </div>
    </div>
  );
};

export default Main;
