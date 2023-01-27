import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

export default function AddForm() {
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(addBook({ title: 'Book Title', author: 'Book Author' }));
    console.log('hello');
  };
  return (
    <>
      <h2>Add A New Book</h2>
      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Author" />
        <button type="button" onClick={handleAddBook}>Add Book</button>
      </form>

    </>
  );
}
