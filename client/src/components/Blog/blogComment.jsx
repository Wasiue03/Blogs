import React, { useState } from 'react';
import styles from './styles.module.css'; // Import the CSS module

const CommentForm = ({ onCommentSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCommentSubmit(comment);
    setComment('');
  };

  return (
    <form className={styles.comment_form} onSubmit={handleSubmit}>
      <textarea
        placeholder="Add a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className={styles.comment_input}
      ></textarea>
      <button type="submit" className={styles.comment_button}>
        Add Comment
      </button>
    </form>
  );
};

export default CommentForm;
