import { db } from "./Firebase";
import { createSlice } from "@reduxjs/toolkit";

const database = db.collection("Users");

const authenticationInitialState = {
  isLoggedIn: false,
  loggedInUser: {},
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: authenticationInitialState,
  reducers: {
    createUser(state, action) {
      state.isLoggedIn = true;
      state.loggedInUser = action.payload;
      database.add({
        email: action.payload.userName,
        pin: action.payload.password,
        name: action.payload.name,
        language: action.payload.language,
      });
    },
    login(state, action) {
      state.isLoggedIn = true;
      state.loggedInUser = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.loggedInUser = {};
    },
  },
});

export const authActions = authenticationSlice.actions;
export default authenticationSlice.reducer;
