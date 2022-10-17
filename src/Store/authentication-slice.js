import { createSlice } from "@reduxjs/toolkit";
import StartFirebase from "./Firebase";
import { ref, set, getDatabase } from "firebase/database";

const db = StartFirebase();
const database = getDatabase();

const authenticationInitialState = {
  isLoggedIn: false,
  loggedInUser: {},
  guestUser: {
    info: {
      email: "guest12345@guest.com",
      pin: 1234,
      name: "Guest",
      language: "None",
    },
    id: "0000",
  },
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: authenticationInitialState,
  reducers: {
    createUser(state, action) {
      const user = action.payload;
      const idGen = Math.floor(Math.random() * 1000);

      let newUser = {
        info: {
          id: Number(idGen),
          email: user.username,
          pin: user.pin + "",
          name: user.name,
          language: user.language,
        },
      };

      set(ref(database, "Users/" + idGen), newUser)
        .then(() => {
          alert("Account Created Successfully");
        })
        .catch((error) => {
          alert("There was an error : " + error);
        });

      state.isLoggedIn = true;
      state.loggedInUser = newUser;
      localStorage.setItem("isLoggedIn", "1");
      localStorage.setItem("loggedInUser", user);
    },

    login(state, action) {
      const user = action.payload;
      state.isLoggedIn = true;
      state.loggedInUser = user;
      localStorage.setItem("isLoggedIn", "1");
      localStorage.setItem("loggedInUser", user);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.loggedInUser = {};
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("loggedInUser");
    },
  },
});

export const authActions = authenticationSlice.actions;
export default authenticationSlice.reducer;
