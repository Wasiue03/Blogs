import { useState, useEffect } from 'react';

import styles from './styles.module.css';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blog posts and user profiles from your backend API
    fetch('http://localhost:8000/api/blog')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner.
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.centeredContainer}>
      <h1 className={styles.pageTitle}>Welcome to Our Blog</h1>
      <div className={styles.blogContainer}>
        {data.map((item) => (
          <div key={item._id} className={styles.postCard}>
            {item.user && (
              <div className={styles.authorInfo}>
                <img src={item.user.profilePicture} alt={item.user.name} />
                <p>{item.user.name}</p>
              </div>
            )}
            {item.image && (
              <img src={`http://localhost:8000${item.image}`} alt={item.title} />
            )}
            {item.title && <h2 className={styles.postTitle}>{item.title}</h2>}
            {item.content && <p className={styles.content}>{item.content}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
