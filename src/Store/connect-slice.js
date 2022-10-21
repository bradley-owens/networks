import { createSlice } from "@reduxjs/toolkit";
import { ref, update, getDatabase } from "firebase/database";
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
  },
  followers: {},
  following: {},
};

const connectSlice = createSlice({
  name: "connect",
  initialState: connectIntialState,
  reducers: {
    follow(state, action) {
      console.log(state.user.id);
      update(ref(database, "Users/" + state.user.id.id), {
        connections: {
          following: { name: action.payload.name, email: action.payload.email },
        },
      })
        .then(() => {
          alert(`You're now following ${action.payload.name}!`);
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
