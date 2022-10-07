import { db } from "./Firebase";
import { createSlice } from "@reduxjs/toolkit";

const database = db.collection("Users");
const accountIntialState = {
  editState: false,
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
      database.ref(state.user.id).update({
        name: action.payload.name,
        email: action.payload.userName,
      });
    },
  },
});

export const editAccountActions = editAccountSlice.actions;
export default editAccountSlice.reducer;
