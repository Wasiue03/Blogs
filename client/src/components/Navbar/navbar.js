// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../Navbar/styles.modules.css";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <Link to="/">My App</Link>
      </div>
      <nav className="navbar-nav">
        <Link to="/home">Home</Link>
        <Link to="/login">Sign In</Link>
        <Link to="/signup">Register</Link>
        <Link to="/blog">Blogs</Link>
        
        
      </nav>
    </header>
  );
};

export default NavBar;