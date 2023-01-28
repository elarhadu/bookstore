import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <div className="nav-menu">
      <a href="#/" className="app-name">
        Bookstore CMS
      </a>
      <ul>
        <li>
          <Link to="/" className="nav-links">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories" className="nav-links">CATEGORIES</Link>
        </li>
      </ul>

      <button type="button" className="user-icon">
        <span className="material-symbols-outlined">person</span>
      </button>
    </div>
  );
}
