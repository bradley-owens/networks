import { db } from "./Firebase";
import { createSlice } from "@reduxjs/toolkit";

const database = db.collection("Users");
const accountIntialState = {
  editAccount: false,
  user: {},
};

const editAccountSlice = createSlice({
  name: "edit",
  initialState: accountIntialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      console.log(state.user);
    },
    editPersonalDetails(state, action) {
      state.editAccount(true);
      database.ref(state.user.info).update({
        name: action.payload.name,
        email: action.payload.userName,
      });

      console.log("changed");
    },
  },
});

export const editAccountActions = editAccountSlice.actions;
export default editAccountSlice.reducer;
