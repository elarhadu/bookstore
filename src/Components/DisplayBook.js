import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
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
  const dispatch = useDispatch();
  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div className="book-display">
      {BOOKS.map((book) => (
        <Book
          key={book.bookId}
          Title={book.Title}
          Author={book.Author}
          onClick={() => handleRemoveBook(book.bookId)}
        />
      ))}

    </div>
  );
}
