import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./authentication-slice";
import editAccountReducer from "./editAccount-slice";
import connectReducer from "./connect-slice";

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    edit: editAccountReducer,
    connect: connectReducer,
  },
});

export default store;
