import { createSlice } from "@reduxjs/toolkit";
import { ref, update, getDatabase, set } from "firebase/database";
import { useContext } from "react";
import { useSelector } from "react-redux";
import AuthContext from "./login-context";

const database = getDatabase();

const connectIntialState = {
  user: {
    info: {},
    contact: {},
    id: {},
    skills: {},
    connections: {},
    followers: {},
    following: {},
  },
};

const connectSlice = createSlice({
  name: "connect",
  initialState: connectIntialState,
  reducers: {
    follow(state, action) {
      const loggedInUser = action.payload.loggedInUser;
      const clickedUser = action.payload.clickedUser;
      const idGen = Math.floor(Math.random() * 1000);

      update(ref(database, "Users/" + loggedInUser.id.id), {
        connections: {
          idGen: [clickedUser.info.name, clickedUser.info.email],
        },
      })
        .then(() => {
          alert(`You're now following ${clickedUser.info.name}!`);
        })
        .catch((error) => {
          alert("There was an error : " + error);
        });
    },

    ////////////////////////////////////////////////////////
  },
});

export const connectActions = connectSlice.actions;
export default connectSlice.reducer;
