import { createSlice } from "@reduxjs/toolkit";
import { ref, update, getDatabase } from "firebase/database";

const database = getDatabase();

const accountIntialState = {
  user: { info: {}, contact: {}, id: {}, skills: {} },
  modalState: false,
};

const editAccountSlice = createSlice({
  name: "edit",
  initialState: accountIntialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },

    modalStateHandler(state) {
      state.modalState = !state.modalState;
    },

    ////////////////////////////////////////////////////////
    setPersonalInformation(state, action) {
      state.user.info = action.payload;
    },

    editPersonalDetail(state, action) {
      update(ref(database, "Users/" + state.user.id.id), {
        info: {
          email: action.payload.email,
          language: action.payload.pin,
          name: action.payload.name,
          pin: action.payload.pin,
          language: action.payload.language,
        },
      })
        .then(() => {
          alert("Personal Details Updated!");
        })
        .catch((error) => {
          alert("There was an error : " + error);
        });
    },

    ////////////////////////////////////////////////////////

    setContactInformation(state, action) {
      state.user.contact = action.payload;
    },

    editContactDetails(state, action) {
      console.log(state.user.id.id);
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
    ////////////////////////////////////////////////////////

    setSkillsInformation(state, action) {
      state.user.skills = action.payload;
    },

    editSkillsDetails(state, action) {
      update(ref(database, "Users/" + state.user.id.id), {
        skills: {
          frameworks: action.payload.frameworks,
          education: action.payload.education,
          experience: action.payload.experience,
          currentRole: action.payload.currentRole,
        },
      })
        .then(() => {
          alert("Skills Details Updated!");
        })
        .catch((error) => {
          alert("There was an error : " + error);
        });
    },
  },
});

export const editAccountActions = editAccountSlice.actions;
export default editAccountSlice.reducer;
