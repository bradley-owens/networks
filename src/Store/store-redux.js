import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./authentication-slice";
import editAccountReducer from "./editAccount-slice";

const store = configureStore({
  reducer: { authentication: authenticationReducer, edit: editAccountReducer },
});

export default store;
