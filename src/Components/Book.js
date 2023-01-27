import React from 'react';
import { PropTypes } from 'prop-types';

const Book = ({
  Title,
  Author,
  onClick,
}) => (
  <ul>
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
  Title: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Book;
