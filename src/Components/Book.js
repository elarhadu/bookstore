import React from 'react';
import { PropTypes } from 'prop-types';
import './Book.css';
import Progress from './Progress';

const Book = ({
  title, author, category, onClick,
}) => (
  <ul className="book-card">
    <li className="book-details">
      <div className="about-book">
        <p>{category}</p>
        <h3 className="book-title">{title}</h3>
        <p>{author}</p>
        <button type="button" className="divider">
          Comment
        </button>
        <button type="button" onClick={onClick} className="divider">
          Remove
        </button>
        <button type="button">Edit</button>
      </div>
      <Progress />
    </li>
  </ul>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Book;
