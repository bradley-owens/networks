import { createSlice } from "@reduxjs/toolkit";
import StartFirebase from "./Firebase";
import { ref, update, getDatabase } from "firebase/database";

const db = StartFirebase();
const database = getDatabase();

const accountIntialState = {
  user: {},
  modalState: false,
};

const editAccountSlice = createSlice({
  name: "edit",
  initialState: accountIntialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.info;
    },
    editContactDetails(state, action) {
      update(ref(database, "Users/" + state.user.id), {
        contact: {
          linkedIn: action.payload.linkedIn,
          github: action.payload.github,
          website: action.payload.website,
        },
      })
        .then(() => {
          alert("Contact Details Updated!");
        })
        .catch((error) => {
          alert("There was an error : " + error);
        });
    },
    modalStateHandler(state) {
      state.modalState = !state.modalState;
    },
  },
});

export const editAccountActions = editAccountSlice.actions;
export default editAccountSlice.reducer;
