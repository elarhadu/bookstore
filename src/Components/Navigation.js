import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="nav-menu">
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </div>
  );
}
