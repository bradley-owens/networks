import { createSlice } from "@reduxjs/toolkit";
import { ref, getDatabase, set } from "firebase/database";

import AuthContext from "./login-context";

const database = getDatabase();

const connectIntialState = {
  userConnections: {
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

      set(
        ref(
          database,
          "Users/" +
            loggedInUser.id.id +
            "/connections/following/" +
            clickedUser.id.id
        ),

        { name: clickedUser.info.name, email: clickedUser.info.email }
      )
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
