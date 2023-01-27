import React from 'react';
import { PropTypes } from 'prop-types';

const Book = ({
  bookId, Title, Author,
}) => (
  <ul key={bookId}>
    <li>
      {Title}
      {' '}
      by
      {' '}
      {Author}
      <button type="button">Remove</button>
    </li>
  </ul>
);

Book.propTypes = {
  bookId: PropTypes.number.isRequired,
  Title: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
};

export default Book;
