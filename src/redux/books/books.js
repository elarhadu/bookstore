import { createAsyncThunk } from '@reduxjs/toolkit';
// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BEjZDBTgCokXyyrgzmVy/books';

export const FETCH_BOOKS = createAsyncThunk('bookstore/books/FETCH_BOOKS', async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});

export const ADD_NEW_BOOK = createAsyncThunk('bookstore/books/ADD_NEW_BOOK', async (book) => {
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: Math.random(),
      title: book.title,
      author: book.author,
      category: book.category,
    }),
  });
  const data = await response.json();
  return data;
});

export const DELETE_BOOK = createAsyncThunk('bookstore/books/DELETE_BOOK', async (bookId) => {
  const response = await fetch(`${URL}/${bookId}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: bookId,
    }),
  });
  const data = await response.json();
  return data;
});

const initialState = {
  books: [{
    bookId: 1,
    Title: 'Jane Eyre',
    Author: 'Charlotte Brontë',
  },
  {
    bookId: 2,
    Title: 'The Hunger Games',
    Author: 'Suzanne Collins',
  }],
};

// Export Action Creators
export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

// Write the reducer and export it as default
export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.book],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => (book.bookId !== action.bookId)),
      };
    default:
      return state;
  }
}
