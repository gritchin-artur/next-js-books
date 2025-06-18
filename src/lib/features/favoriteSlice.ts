import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Book } from "@/types/book";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [] as Book[],
  reducers: {
    addToFavorite: (state, action: PayloadAction<Book>) => {
      const exists = state.find((book) => book.id === action.payload.id);
      if (!exists) state.push(action.payload);
    },
    removeFromFavorite: (state, action: PayloadAction<string>) => {
      return state.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
