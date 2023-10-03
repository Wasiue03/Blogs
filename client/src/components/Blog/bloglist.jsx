import React from 'react';
import styles from './styles.module.css';

const BlogList = ({ posts, className }) => {
  return (
    <div className={`${styles.blog_list} ${className}`}>
      {posts.map((post) => (
        <div key={post.id} className={`${styles.blog_item} ${styles.card}`}>
          <img
            src={post.imageUrl}
            alt={post.title}
            className={styles.card_image}
          />
          <div className={styles.card_content}>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.content}>{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
