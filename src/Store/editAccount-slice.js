// import { db } from "./Firebase";
import { createSlice } from "@reduxjs/toolkit";

import { red, set, get, update, remove, child } from "firebase/database";

// const database = db.collection("Users");
const accountIntialState = {
  editAccount: false,
  user: {},
  modalState: false,
};

const editAccountSlice = createSlice({
  name: "edit",
  initialState: accountIntialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    editSkillsDetails(state, action) {
      // database.ref(state.user.info).update({
      //   name: action.payload.name,
      //   email: action.payload.userName,
      // });

      console.log("changed");
    },
    modalStateHandler(state) {
      state.modalState = !state.modalState;
    },
  },
});

export const editAccountActions = editAccountSlice.actions;
export default editAccountSlice.reducer;
