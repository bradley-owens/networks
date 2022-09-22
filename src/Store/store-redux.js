import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./authentication-slice";

const store = configureStore({
  reducer: { authentication: authenticationReducer },
});

export default store;
