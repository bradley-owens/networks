// import { db } from "./Firebase";
import { createSlice } from "@reduxjs/toolkit";
import StartFirebase from "./Firebase";
import { ref, set, get, update, remove, child } from "firebase/database";

// const database = db.collection("Users");
const db = StartFirebase();

const authenticationInitialState = {
  isLoggedIn: false,
  loggedInUser: {},
  guestUser: {
    email: "guest12345@guest.com",
    pin: 1234,
    name: "Guest",
    language: "None",
  },
};

const idGen = Math.floor(Math.random() * 1000);

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: authenticationInitialState,
  reducers: {
    createUser(state, action) {
      set(ref(db, "Users/" + idGen), {
        email: action.payload.username,
        pin: action.payload.pin + "",
        name: action.payload.name,
        language: action.payload.language,
      })
        .then(() => {
          alert("Account Created Successfully");
        })
        .catch((error) => {
          alert("There was an error : " + error);
        });

      state.isLoggedIn = true;
      state.loggedInUser = action.payload;
      localStorage.setItem("isLoggedIn", "1");
      localStorage.setItem("loggedInUser", action.payload);
    },
    checkUser(state, action) {},

    login(state, action) {
      state.isLoggedIn = true;
      state.loggedInUser = action.payload;
      localStorage.setItem("isLoggedIn", "1");
      localStorage.setItem("loggedInUser", action.payload);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.loggedInUser = {};
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("loggedInUser");
    },
  },
});

const options = {
  method: "GET", // *GET, POST, PUT, DELETE, etc.
  body: JSON.stringify(),
};

export async function fetchUsers() {
  const response = await fetch(
    "https://networks-react-default-rtdb.firebaseio.com/"
  );
  const data = await response.json();
}

export const authActions = authenticationSlice.actions;
export default authenticationSlice.reducer;
