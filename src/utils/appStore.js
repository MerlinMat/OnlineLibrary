import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './BooksSlice';

const appStore = configureStore({
  reducer: {
    books: booksReducer,  // this connects books slice to store
  },
});

export default appStore;
