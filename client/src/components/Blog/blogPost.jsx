import React from 'react';
import styles from './styles.module.css'; // Import the CSS module

const BlogPost = ({ post, className }) => {
  return (
    <div className={`${styles.blog_post} ${className}`}>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.content}>{post.content}</p>
      {/* Display comments and CommentForm here */}
    </div>
  );
};

export default BlogPost;
