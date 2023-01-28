import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/books';
import Book from './Book';

export default function DisplayBook() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div className="book-display">
      {books.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
          onClick={() => handleRemoveBook(book.item_id)}
        />
      ))}
    </div>
  );
}
