import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Book } from "@/types/book";

const basketSlice = createSlice({
  name: "basket",
  initialState: [] as Book[],
  reducers: {
    addToBasket: (state, action: PayloadAction<Book>) => {
      const exists = state.find((book) => book.id === action.payload.id);
      if (!exists) state.push(action.payload);
    },
    removeFromBasket: (state, action: PayloadAction<string>) => {
      return state.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
