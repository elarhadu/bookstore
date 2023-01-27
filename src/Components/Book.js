import React from 'react';
import { PropTypes } from 'prop-types';

const Book = ({
  bookId, Title, Author, onClick,
}) => (
  <ul key={bookId}>
    <li>
      {Title}
      {' '}
      by
      {' '}
      {Author}
      <button type="button" onClick={onClick}>Remove</button>
    </li>
  </ul>
);

Book.propTypes = {
  bookId: PropTypes.number.isRequired,
  Title: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Book;
