import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userData: null,
};

const storedState = JSON.parse(localStorage.getItem("authState"));
const persistedState = storedState || initialState;

const authSlice = createSlice({
  name: "auth",
  initialState: persistedState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userData = action.payload;

      localStorage.setItem("authState", JSON.stringify(state));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;

      localStorage.removeItem("authState");
    },
  },
});

export const { login, logout } = authSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
