import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Book } from "@/types/book";
import api from "../api";

interface BookState {
  books: Book[];
  status: boolean;
  error: string | null;
}

const initialState: BookState = {
  books: [],
  status: false,
  error: null,
};

export const fetchBooks = createAsyncThunk<Book[], string>(
  "books/fetchBooks",
  async (query: string) => {
    const response = await api.get(`?q=${encodeURIComponent(query)}`);
    return response.data.items || [];
  },
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
        state.status = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default booksSlice.reducer;
