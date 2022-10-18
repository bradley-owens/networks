import { createSlice } from "@reduxjs/toolkit";
import { ref, update, getDatabase } from "firebase/database";

const database = getDatabase();

const accountIntialState = {
  user: { info: {}, contact: {}, id: {} },
  modalState: false,
};

const editAccountSlice = createSlice({
  name: "edit",
  initialState: accountIntialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setContactInformation(state, action) {
      state.user.contact = action.payload;
    },

    editContactDetails(state, action) {
      update(ref(database, "Users/" + state.user.id.id), {
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
