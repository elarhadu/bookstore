import React, { Component } from 'react';

const BOOKS = [{
  id: 1,
  Title: 'Jane Eyre',
  Author: 'Charlotte Brontë',
}];

export default class DisplayBook extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <div className="book-display">
        {BOOKS.map(
          ({ id, Title, Author }) => (
            <ul key={id}>
              <li>
                {Title}
                {' '}
                by
                {' '}
                {Author}
              </li>
            </ul>
          ),
        )}
        <button type="button">Remove</button>
      </div>
    );
  }
}
