import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  books: [],
  error: {},
  response: {},
  borrowedBooks: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    getBookSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.books = payload;
    },
    requestFailed: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = bookSlice;
export const { requestPending, requestFailed, getBookSuccess } = actions;
export default reducer;
