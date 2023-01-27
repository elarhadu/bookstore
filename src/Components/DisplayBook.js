import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Book from './Book';

export default function DisplayBook() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div className="book-display">
      {books.map((book) => (
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
