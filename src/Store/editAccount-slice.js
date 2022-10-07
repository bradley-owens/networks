import { db } from "./Firebase";
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const database = db.collection("Users");
const user = useSelector((state) => state.authentication.loggedInUser);
const accountIntialState = {
  editState: false,
  userState: user,
};

const EditAccountSlice = createSlice({
  name: "edit",
  initialState: accountIntialState,
  reducers: {
    editPersonalDetails(state, action) {
      database.update();
    },
  },
});
