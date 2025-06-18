import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/booksSlice";
import basketReducer from "./features/basketSlice";
import favoriteReducer from "./features/favoriteSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    favorite: favoriteReducer,
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
