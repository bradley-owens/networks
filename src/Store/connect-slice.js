import { createSlice } from "@reduxjs/toolkit";
import { ref, getDatabase, remove, set } from "firebase/database";

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

        {
          name: clickedUser.info.name,
          email: clickedUser.info.email,
          language: clickedUser.info.language,
        }
      )
        .then(() => {
          alert(`You're now following ${clickedUser.info.name}!`);
        })
        .catch((error) => {
          alert("There was an error : " + error);
        });
    },
    unfollow(state, action) {
      const loggedInUser = action.payload.loggedInUser;
      const clickedUser = action.payload.clickedUser;

      remove(
        ref(
          database,
          "Users/" +
            loggedInUser.id.id +
            "/connections/following/" +
            clickedUser.id.id
        ),

        {
          name: clickedUser.info.name,
          email: clickedUser.info.email,
          language: clickedUser.info.language,
        }
      )
        .then(() => {
          alert(`You're no longer following ${clickedUser.info.name}!`);
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
