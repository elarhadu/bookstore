import React from 'react';
import Book from './Book';

const BOOKS = [
  {
    bookId: 1,
    Title: 'Jane Eyre',
    Author: 'Charlotte Brontë',
  },
  {
    bookId: 2,
    Title: 'The Hunger Games',
    Author: 'Suzanne Collins',
  },
];

export default function DisplayBook() {
  return (
    <div className="book-display">
      {BOOKS.map((book) => (
        <Book
          key={book.bookId}
          Title={book.Title}
          Author={book.Author}
        />
      ))}
    </div>
  );
}
