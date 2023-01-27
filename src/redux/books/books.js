// Actions
const ADD_BOOK = 'bookstore/books/ADD';
const REMOVE_BOOK = 'bookstore/books/REMOVE';

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
