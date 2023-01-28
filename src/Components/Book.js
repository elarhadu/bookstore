import React from 'react';
import { PropTypes } from 'prop-types';
import './Book.css';
import Progress from './Progress';

const Book = ({
  title, author, category, onClick,
}) => (
  <li>
    <div className="book">
      <div className="about-book">
        <div>
          <p>{category}</p>
          <h3 className="book-title">{title}</h3>
          <p>{author}</p>
        </div>
        <div className="btn-container">
          <button type="button">
            Comment
          </button>
          <div className="vertical-line" />
          <button type="button" onClick={onClick}>
            Remove
          </button>
          <div className="vertical-line" />
          <button type="button">Edit</button>
        </div>
      </div>
      <Progress />
    </div>
  </li>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Book;
