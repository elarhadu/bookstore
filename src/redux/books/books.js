import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BEjZDBTgCokXyyrgzmVy/books';

export const fetchBooks = createAsyncThunk(FETCH_BOOKS, async (post, { dispatch }) => {
  const response = await fetch(URL);
  const data = await response.json();
  const books = Object.keys(data).map((id) => ({
    item_id: id,
    title: data[id][0].title,
    author: data[id][0].author,
    category: data[id][0].category,
  }));
  dispatch({
    type: FETCH_BOOKS,
    payload: books,
  });
  return books;
});

export const addBook = createAsyncThunk(ADD_BOOK, async (book, { dispatch }) => {
  await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  dispatch({
    type: ADD_BOOK,
    payload: book,
  });
  return book;
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id, { dispatch }) => {
  await fetch(`${URL}/${id}`, {
    method: 'DELETE',
  });
  dispatch({
    type: REMOVE_BOOK,
    payload: id,
  });
  return id;
});

const initialState = {
  books: [],
};

// Write the reducer and export it as default
const booksReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchBooks.fulfilled, (state, action) => ({ ...state, books: action.payload }));
  builder.addCase(addBook.fulfilled, (state, action) => ({
    ...state,
    books: [...state.books, action.payload],
  }));
  builder.addCase(removeBook.fulfilled, (state, action) => ({
    ...state,
    books: [...state.books.filter((book) => (book.item_id !== action.payload))],
  }));
});
export default booksReducer;
