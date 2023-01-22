import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isLoggedIn: sessionStorage.getItem("user") ? true : false,
  userInfo: sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : {},
  response: {},
  error: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
      state.error = {};
      state.isLoggedIn = true;

      sessionStorage.setItem("user", JSON.stringify(action.payload));
    },
    requestFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.userInfo = {};
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = {};
      state.response = {};
      sessionStorage.removeItem("user");
    },
    registerSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const {
  requestPending,
  requestFaild,
  loginSuccess,
  requestFailed,
  registerSuccess,
  logoutSuccess,
} = actions;
export default reducer;
