import React from 'react';
import { PropTypes } from 'prop-types';

const Book = ({
  title,
  author,
  category,
  onClick,
}) => (
  <ul>
    <li>
      {title}
      {' '}
      {category}
      {' '}
      by
      {' '}
      {author}
      <button type="button" onClick={onClick}>Remove</button>
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
