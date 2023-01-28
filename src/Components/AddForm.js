import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books';

export default function AddForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleAddBook = (e) => {
    e.preventDefault();
    if (title === '' && author === '') return;
    dispatch(addBook({
      item_id: uuid(),
      title,
      author,
      category: 'Fiction',
    }));
    setAuthor('');
    setTitle('');
  };

  return (
    <>
      <h2>Add A New Book</h2>
      <form onSubmit={handleAddBook}>
        <input type="text" placeholder="Title" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
        <input type="text" placeholder="Author" name="author" onChange={(e) => setAuthor(e.target.value)} value={author} />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}
